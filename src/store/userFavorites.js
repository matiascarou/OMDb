import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setFavorites = createAction("USERFAVORITES");
  
  const favoritesReducer = createReducer(
    [],
    {
      [setFavorites]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default favoritesReducer;
  