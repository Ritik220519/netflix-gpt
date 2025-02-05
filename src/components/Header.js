import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = ({isSignInForm}) => {
  const navigate = useNavigate();
  const handleSignOutClick = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate ("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")

    });
  }
  return (
    <div className=" flex justify-between  px-8 py-2 w-full absolute bg-gradient-to-b from-black z-10">
      <img
        className=" w-[180px] "
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
     <div>
     {!isSignInForm &&<button onClick={handleSignOutClick} className="text-white bg-red-600 m-2 p-2 rounded-lg">Sign out</button>}
     </div>
    </div>
  
  );
};
export default Header;
