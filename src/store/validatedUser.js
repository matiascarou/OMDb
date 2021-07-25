import { createAction, createReducer } from "@reduxjs/toolkit";

export const setValidatedUser = createAction("VALIDATEDUSER");

const validatedUserReducer = createReducer(
  {},
  {
    [setValidatedUser]: (state, action) => {
      return (state = action.payload);
    },
  }
);

export default validatedUserReducer;
