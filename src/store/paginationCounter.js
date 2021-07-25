import {
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const setPaginationCounter = createAction("PAGINATIONCOUNTER");

const paginationCounterReducer = createReducer(
  1,
  {
    [setPaginationCounter]: (state, action) => {
      return (state = action.payload);
    },
  }
);

export default paginationCounterReducer;