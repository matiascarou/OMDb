import React from "react";
import { setPaginationCounter } from "../store/paginationCounter";
import { useDispatch } from "react-redux";

const RestartPaginationCounter = () => {
  const dispatch = useDispatch();
  dispatch(setPaginationCounter(1));
};
