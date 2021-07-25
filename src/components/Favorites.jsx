import React from "react";
import { useSelector } from "react-redux";
import PosterNotFound from "./PosterNotFound";
import { Link } from "react-router-dom";
import EmptyMovies from "./EmptyMovies";
import ArraySlicer from "../hooks/ArraySlicer";
import UserHasNoFavorites from "./UserHasNoFavorites";

const Favorites = () => {
  const { userFavorites } = useSelector((store) => store);

  const movies = ArraySlicer(userFavorites);

  return movies.length ? (
    <div className="moviesAndButtonsDiv">
      <div className="moviesMainDiv">
        {movies &&
          movies.map((movies, index) => {
            return (
              <div className="movieByFiveDiv" key={index}>
                {movies.map((movie, i) => {
                  return (
                    <div className='favoritesImgAndButtonDiv' key={i}>
                      <div className="movieRowDiv">
                        <Link
                          className="styledLink"
                          to={`/movies/${movie.imdbID}`}
                        >
                          <h1>{movie.Title}</h1>

                          {movie.Poster.length > 6 ? (
                            <div>
                              <div>
                                <img src={movie.Poster} alt="movie poster" className='moviesPaginationImage'></img>
                              </div>
                            </div>
                          ) : (
                            <div className="posterNotAvailableOnMoviesDiv">
                              <PosterNotFound />
                            </div>
                          )}
                        </Link>
                      </div>
                      {/* <button onClick={() => deleteHandler(movie.imdbID)} className='favoritesDeleteButton'>Delete</button> */}
                    </div>
                  );
                })}
              </div>
            );
          })}
        {!userFavorites.length ? <EmptyMovies movies={movies} /> : null}
      </div>
    </div>
  ) : (
    <UserHasNoFavorites />
  );
};

export default Favorites;
