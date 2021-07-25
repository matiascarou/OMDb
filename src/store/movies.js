import {
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const setMovies = createAction("MOVIES");

const moviesReducer = createReducer(
  [],
  {
    [setMovies]: (state, action) => {
      return (state = action.payload);
    },
  }
);

export default moviesReducer;
