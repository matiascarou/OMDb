import React from "react";
import Movies from "../components/Movies";
import ArraySlicer from "../hooks/ArraySlicer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPaginationCounter } from "../store/paginationCounter";
import { setMovies } from "../store/movies";
import { setTotalPages } from "../store/totalPages";
import axios from "axios";

const MoviesContainer = () => {
  let { paginationCounter, search } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { s, y, type } = search;

  const clickHandler = (e) => {
    const { name } = e.target;
    dispatch(
      setPaginationCounter(
        name === "nextPage" ? paginationCounter + 1 : paginationCounter - 1
      )
    );
  };

  // if (paginationCounter === 0) dispatch(setPaginationCounter(TotalPages(movies.totalResults)));

  if (paginationCounter === 0) dispatch(setPaginationCounter(1));

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?${s}${y}${type}page=${paginationCounter}&apikey=62e1844`
      )
      .then((res) => res.data)
      .then((pageMovies) => {
        dispatch(setMovies(pageMovies));
        dispatch(setTotalPages(pageMovies.totalResults));
      })
      .catch((err) => {
        setMovies([]);
        dispatch(setPaginationCounter(1));
      });
  }, [paginationCounter]);

  return <Movies ArraySlicer={ArraySlicer} clickHandler={clickHandler} />;
};

export default MoviesContainer;
