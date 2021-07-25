import {
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";
  
  export const setUsers = createAction("USERS");
  
  const usersReducer = createReducer(
    [],
    {
      [setUsers]: (state, action) => {
        return (state = action.payload);
      },
    }
  );
  
  export default usersReducer;
  