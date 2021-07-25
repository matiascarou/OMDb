import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setSingleMovie = createAction("singleMovie");
  
  const singleMovieReducer = createReducer(
    {},
    {
      [setSingleMovie]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default singleMovieReducer;