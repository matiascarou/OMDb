import React from "react";
import ArrayPromisifier from "../hooks/ArrayPromisifier";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SingleUserInfo = ({ singleUser }) => {
  const [finalFavorites, setFinalFavorites] = useState([]);

  const { favorites } = singleUser;

  useEffect(() => {
    ArrayPromisifier(favorites) &&
      ArrayPromisifier(favorites).then((result) => setFinalFavorites(result));
  }, []);

  return (
    <div className="singleUserMainDiv">
      <h1 className="singleUserTitle">{singleUser.username}</h1>
      {finalFavorites.length ? (
        <h2>Favorite movies</h2>
      ) : (
        <h2>This user has no favorites</h2>
      )}
      <div
        className={
          finalFavorites.length ? "favoriteMoviesFromSingleUserDiv" : ""
        }
      >
        {finalFavorites.length
          ? finalFavorites.map((favorite) => {
              return (
                <Link to={`/movies/${favorite.imdbID}`} className="styledLink">
                  <h1
                    className="singleUserFavoriteMovieTitle"
                    key={favorite.imdbID}
                  >
                    {favorite.Title}
                  </h1>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SingleUserInfo;
