import React from "react";
import { useSelector } from "react-redux";
import useTrailerMovie from "./Hooks/useTrailerMovie";

const VideoBg = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerMovies);
  useTrailerMovie(movieId)

  return (
    <div>
      <iframe
      className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/MbohuBUxcRU?si= " + trailerVideo?.key + "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
