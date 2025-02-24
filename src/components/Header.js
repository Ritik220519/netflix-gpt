import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { netflix_logo, SUPPORTES_LANGUAGE } from "../utils/constant";
import {toggleGptSearch} from "../utils/gptSlice";
import { languageChange } from "../utils/configSlice";


const Header = ({ isSignInForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)


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
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //  unSubscribe when the component unmounts
    return () => unSubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleGptLanguageChange = (e) =>{
    dispatch(languageChange(e.target.value));
    console.log(e.target.value);
    
  }

  return (
    <div className=" flex justify-between  px-8 py-2 w-full absolute bg-gradient-to-b from-black z-10">
      <img className=" w-[180px] " src={netflix_logo} alt="netflix-logo" />

      <div>
       {showGptSearch && <select className="bg-gray-600  text-white rounded-md p-1 m-2" onChange={handleGptLanguageChange}>
          {SUPPORTES_LANGUAGE.map((lang) => (
            <option key={lang.identifire} value={lang.identifire}>
              {lang.name}
            </option>
          ))}
        </select>}
        <button
          className="bg-purple-600 text-white p-1 px-2 m-2  rounded-lg"
          onClick={handleGptSearchClick}
        >
          {!showGptSearch ? "GPT-Search"  : "Home"}
        </button>
        {!isSignInForm && (
          <button
            onClick={handleSignOutClick}
            className="text-white bg-red-600 m-2 p-1 rounded-lg"
          >
            Sign out
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
