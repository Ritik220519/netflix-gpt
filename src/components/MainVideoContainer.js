import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const MainVideoContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if(!movies) return;
  const mainMovie = movies[0];

 
  console.log("here", mainMovie);
  const { original_title, overview , id} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}  />
      <VideoBg  movieId ={id}/>
      <SecondaryContainer/>
    </div>
  );
};

export default MainVideoContainer;
