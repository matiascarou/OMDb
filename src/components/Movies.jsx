import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ForwardAndBack from "./ForwardAndBack";
import EmptyMovies from "./EmptyMovies";
import PosterNotFound from "./PosterNotFound";
import isUserValidated from "../hooks/IsUserValidated";

const Movies = ({ ArraySlicer, clickHandler }) => {
  let { Search } = useSelector((state) => state.movies);

  let { validatedUser } = useSelector((state) => state);

  let movies = ArraySlicer(Search);

  const isValidated = isUserValidated(validatedUser)

  return isValidated ? (
    <div className="moviesAndButtonsDiv">
      <div className="moviesMainDiv">
        {movies &&
          movies.map((movies, index) => {
            return (
              <div className="movieByFiveDiv" key={index}>
                {movies.map((movie) => {
                  return (
                    <div className="movieRowDiv" key={movie.imdbID}>
                      <Link
                        className="styledLink"
                        to={`/movies/${movie.imdbID}`}
                      >
                        <h1>{movie.Title}</h1>

                        {movie.Poster.length > 6 ? (
                          <div>
                            <img className='moviesPaginationImage' src={movie.Poster} alt="movie poster"></img>
                          </div>
                        ) : (
                          <div className="posterNotAvailableOnMoviesDiv">
                            <PosterNotFound />
                          </div>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
        {!movies.length ? <EmptyMovies movies={movies} /> : null}
      </div>
      <ForwardAndBack clickHandler={clickHandler} />
    </div>
  ) : null;
};

export default Movies;
