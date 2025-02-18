import { useEffect } from "react";
import { API_Opition } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../../utils/moviesSlice";

const useUpComingMovies = () =>{
    const dispatch = useDispatch();

const getUpComingMovies = async () =>{

    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , API_Opition);
    const json = await data.json();
    console.log("UpComing" , json.results);
    dispatch(addUpComingMovies(json.results));
}

useEffect(() =>{
    getUpComingMovies();
},[])


}
export default useUpComingMovies;