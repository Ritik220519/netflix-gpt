import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_NowPlayingMovies_URL, API_Opition } from '../../utils/constant';
import { addNowPlayingMovies } from '../../utils/moviesSlice';

const useNowPlayingMovies = () => {
 
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () =>{
  
      const data  = await fetch(API_NowPlayingMovies_URL , API_Opition);
      const jsonData = await data.json();
      console.log(jsonData.results);
      dispatch(addNowPlayingMovies(jsonData.results))
    }
    useEffect(() => {
      getNowPlayingMovies();
  
    }, [])
}

export default useNowPlayingMovies
