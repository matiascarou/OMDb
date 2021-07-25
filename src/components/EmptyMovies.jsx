import React from "react";
import { Link } from 'react-router-dom'

const EmptyMovies = () => {
  return (
    <div className="moviesAreEmptyMainDiv">
      <div className="moviesAreEmptyDiv">
        <h1>No movies loaded.</h1>
        <Link to="/">
          <button className="submitButton">Search For a Movie?</button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyMovies;
