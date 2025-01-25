import Header from "./Header";
const LogIn = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
          alt="netflix-bg-img"
        />
      </div>
     
        <form className=" absolute w-3/12 my-36 p-12 mx-auto right-0 left-0 bg-black text-white rounded-2xl bg-opacity-85" >
            <p className=" text-3xl font-bold py-4 m-2 ">Sign In</p>
            <input type="text" placeholder="Email or Mobile Number" className="my-2 p-4 w-full bg-slate-700 text-white rounded-md" />
            <input type="text" placeholder="Password" className=" my-2 p-4 w-full bg-slate-700 text-white rounded-md" />
            <button className="bg-rose-600 my-4 p-3 w-full  rounded-md">Sign In</button>
        </form>
      </div>
      
   
  );
};

export default LogIn;
