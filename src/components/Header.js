import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { netflix_logo } from "../utils/constant";

const Header = ({ isSignInForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOutClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    //  unSubscribe when the component unmounts
  return () => unSubscribe();
  }, []);

  return (
    <div className=" flex justify-between  px-8 py-2 w-full absolute bg-gradient-to-b from-black z-10">
      <img
        className=" w-[180px] "
        src={netflix_logo}
        alt="netflix-logo"
      />
      <div>
        {!isSignInForm && (
          <button
            onClick={handleSignOutClick}
            className="text-white bg-red-600 m-2 p-2 rounded-lg"
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
