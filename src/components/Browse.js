import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import usePopularMovie from "./Hooks/usePopularMovie";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpComingMovies from "./Hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import SecondaryContainer from "./SecondaryContainer";

import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  useUpComingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainVideoContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
