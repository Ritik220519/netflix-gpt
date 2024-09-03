import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt=""
        />
      </div>

      <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 rounded bg-gray-600 w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 rounded bg-gray-600 w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 bg-gray-600 w-full rounded"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded">
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Allready Registered SignIn Now"}
        </p>
        <p className="py-4 font-light text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
      </form>
    </div>
  );
};

export default Login;
