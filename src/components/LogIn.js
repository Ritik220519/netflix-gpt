import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidations } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidateButton = () => {
    const message = checkValidations(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header isSignInForm={isSignInForm} />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
          alt="netflix-bg-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 bg-black text-white rounded-2xl bg-opacity-85"
      >
        <p className=" text-3xl font-bold py-4 m-2 ">
          {isSignInForm ? "sign In" : "sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="my-2 p-4 w-full bg-slate-700 text-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="my-2 p-4 w-full bg-slate-700 text-white rounded-md"
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className=" my-2 p-4 w-full bg-slate-700 text-white rounded-md"
        />

        <p className="text-rose-600 font-medium m-2">{errorMessage}</p>
        <button
          className="bg-rose-500 my-4 p-3 w-full  rounded-md"
          onClick={() => handleValidateButton()}
        >
          {isSignInForm ? "Sign In" : "sign Up"}
        </button>
        <span className="m-2 py-4">
          {" "}
          <span className="cursor-pointer" onClick={() => handleSignInForm()}>
            {isSignInForm
              ? " New to Netflix? Sign up Now"
              : "Already a member ? Sign In Now"}
          </span>{" "}
        </span>
      </form>
    </div>
  );
};

export default LogIn;
