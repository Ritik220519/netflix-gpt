import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
    <Header/>
    <MainVideoContainer/>
    </div>
  );
};

export default Browse;
