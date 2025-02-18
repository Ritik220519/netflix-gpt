import React, { useEffect } from 'react'
import { API_Opition } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import {addTopRatedMovies} from "../../utils/moviesSlice"

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovie = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2", API_Opition);
        const json = await data.json();
        console.log("Top Rated" , json.results);
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() =>{
        getTopRatedMovie();
    },[])
}

export default useTopRatedMovies
