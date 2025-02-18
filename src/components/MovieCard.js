import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";

const MovieCard = ({ posterPath  }) => {
  return (
    <div  className=" pr-4 w-40 ">
      <img
      className="rounded-sm" 
      src={TMDB_IMG_URL + posterPath} alt="TMDB_NowPlaying_List" />
    </div>
  );
};

export default MovieCard;
