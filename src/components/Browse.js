import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import usePopularMovie from "./Hooks/usePopularMovie";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpComingMovies from "./Hooks/useUpComingMovies";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
    <Header/>
    <MainVideoContainer/>
    </div>
  );
};

export default Browse;
