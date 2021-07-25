import React from "react";
import { Link } from "react-router-dom";

const UserHasNoFavorites = () => {
  return (
    <div className="moviesAreEmptyMainDiv">
      <div className='userHasNoFavoritesDiv'>
        <h1 className='userHasNoFavoritesTitles'>No favorites here!</h1>
        <h1 className='userHasNoFavoritesTitles'>Go To</h1>
        <div>
          <Link to="/">
            <button className="submitButton">Home</button>
          </Link>
          <Link to="/movies">
            <button className="submitButton">Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHasNoFavorites;
