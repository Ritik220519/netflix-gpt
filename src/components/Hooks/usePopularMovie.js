import { useDispatch } from "react-redux";
import { API_Opition } from "../../utils/constant";

import { useEffect } from "react";
import { addPopularMovieSugg } from "../../utils/moviesSlice";


const usePopularMovie = () => {
    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_Opition
    );
    const json = await data.json();
    console.log("popular" , json);
    dispatch(addPopularMovieSugg(json?.results));
   
  
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovie;
