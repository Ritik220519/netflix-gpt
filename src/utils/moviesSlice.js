import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    addNowPlayingMovies: null,
    addTrailerMovies : null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies= action.payload;
    },
    addTrailerMovies : (state , action) =>{
      state.addTrailerMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies , addTrailerMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
