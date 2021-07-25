import React from "react";
import MainSearch from "../components/MainSearch";
import { useState } from "react";
import "../index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPaginationCounter } from "../store/paginationCounter";
import { setTotalPages } from "../store/totalPages";
import { setMovies } from "../store/movies";
import { setSearch } from "../store/search";
import TotalPages from "../hooks/TotalPages";

const MainSearchContainer = () => {
  const { paginationCounter, search } = useSelector((state) => state);
  const dispatch = useDispatch();

  const page = `page=${paginationCounter}&`

  const { s, y, type } = search;

  const [notSubmitButtonsArray, setNotSubmitButtonsArray] = useState([
    { name: "movie", isChecked: false },
    { name: "series", isChecked: false },
    { name: "episode", isChecked: false },
  ]);

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = `${key}=${e.target.value.toLowerCase()}&`;
    dispatch(setSearch({ ...search, [key]: value }));
  };

  const clickHandler = (e) => {
    const value = `type=${e.target.name.toLowerCase()}&`;
    setNotSubmitButtonsArray(
      notSubmitButtonsArray.map((button, index) => {
        return button.name === e.target.name.toLowerCase()
          ? { name: button.name, isChecked: true }
          : { name: button.name, isChecked: false };
      })
    );
    dispatch(setSearch({ ...search, type: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?${s}${y}${type}${page}&apikey=62e1844`)
      .then((res) => res.data)
      .then((movies) => {
        dispatch(setPaginationCounter(1));
        dispatch(setMovies(movies));
        dispatch(setTotalPages(TotalPages(movies.totalResults)));
      }).catch((err) => err)
      dispatch(setSearch({s:'', y:'', type:''}))
      e.reset()
  };

  return (
    <MainSearch
      notSubmitButtonsArray={notSubmitButtonsArray}
      submitHandler={submitHandler}
      changeHandler={changeHandler}
      clickHandler={clickHandler}
    />
  );
};

export default MainSearchContainer;
