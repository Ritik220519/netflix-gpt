import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.addNowPlayingMovies);
  const PopularMovies = useSelector((store)=>store.movies.addPopularMovieSugg);
  const topRatedMovies = useSelector((store)=> store.movies.addTopRatedMovies);
  const upComingMovies = useSelector((store)=> store.movies.addUpComingMovies);

  return (
    <div className=" px-4 bg-black">
      <div className="-mt-72 relative z-20">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Upcoming"} movies={upComingMovies} />
        <MovieList title={"Popular"} movies={PopularMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
      
      </div>
    </div>
  );
};

export default SecondaryContainer;
