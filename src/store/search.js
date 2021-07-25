import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setSearch = createAction("SEARCH");
  
  const searchReducer = createReducer(
    {s:'', y:'', type:''},
    {
      [setSearch]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default searchReducer;