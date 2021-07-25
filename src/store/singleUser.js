import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setSingleUser = createAction("SINGLEUSER");
  
  const singleUserReducer = createReducer(
    {},
    {
      [setSingleUser]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default singleUserReducer;