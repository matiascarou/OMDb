import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setSearchUser = createAction("MOVIES");
  
  const searchUserReducer = createReducer(
    {username: ''},
    {
      [setSearchUser]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default searchUserReducer;
  