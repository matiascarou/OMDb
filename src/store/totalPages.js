import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setTotalPages = createAction("TOTALPAGES");
  
  const totalPagesReducer = createReducer(
    0,
    {
      [setTotalPages]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default totalPagesReducer;