import React from "react";
import SingleMovie from "../components/SingleMovie";
import { useSelector } from "react-redux";
import axios from "axios";

const SingleMovieContainer = ({ match }) => {
  let { validatedUser } = useSelector((store) => store);

  const clickHandler = (movieId) => {
    const userId = validatedUser.user.id;
    axios
      .post("/api/auth/favorites", { userId, movieId })
      .then((res) => res.data);
  };

  return <SingleMovie match={match} clickHandler={clickHandler} />;
};

export default SingleMovieContainer;
