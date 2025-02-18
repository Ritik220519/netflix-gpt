import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addTrailerMovies : null,
    addPopularMovieSugg : null,
    addTopRatedMovies : null,
    addUpComingMovies : null
  
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies= action.payload;
    },
    addTrailerMovies : (state , action) =>{
      state.addTrailerMovies = action.payload;
    },
    addPopularMovieSugg : (state , action) =>{
      state.addPopularMovieSugg = action.payload;
    },
    addTopRatedMovies : (state, action) =>{
      state.addTopRatedMovies = action.payload;
    },
    addUpComingMovies :(state , action) =>{
        state.addUpComingMovies = action.payload;
    }
    
   
  },
});

export const { addNowPlayingMovies , addTrailerMovies , addPopularMovieSugg , addTopRatedMovies , addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
