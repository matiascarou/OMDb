import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleMovie } from "../store/singleMovie";
import { Link } from "react-router-dom";
import PosterNotFound from "./PosterNotFound";
import spinnerGif from "../assets/spinnerGif.gif";

const SingleMovie = ({ match, clickHandler }) => {
  const { singleMovie } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=62e1844`)
      .then((res) => res.data)
      .then((singleMovie) => {
        dispatch(setSingleMovie(singleMovie));
      });
  }, []);

  const {
    Title,
    Director,
    Actors,
    Plot,
    Poster,
    Country,
    Writer,
    Released,
    Genre,
    Ratings,
  } = singleMovie;

  const technicalStuff = [Director, Actors, Writer, Released, Country, Genre];

  const stuff = [
    "Director",
    "Actors",
    "Writer",
    "Released",
    "Country",
    "Genre",
  ];

  return id === singleMovie.imdbID ? (
    <div className="singleMovieContainer">
      <div className="singleMovieCastTitleAndPosterDiv">
        <div className="technicalStuffDiv">
          {technicalStuff.map((item, index) => {
            return (
              <h3 className="singleMovieCastDiv">
                {stuff[index]}: {item.length > 6 ? item : 'Not available'}
              </h3>
            );
          })}
        </div>
        <div className="singleMovieTitleAndPosterDiv" key={singleMovie.imdbID}>
          <div className="onlyPosterAndTitleDiv">
            <h1 style={{'max-width': '25vw'}}>{Title}</h1>
            {Poster.length > 6 ? (
              <div className="buttonAndPosterDiv">
                <img src={Poster} className='movieSingleImage'></img>
              </div>
            ) : (
              <div className="posterNotAvailableOnSingleMovieDiv">
                <PosterNotFound />
              </div>
            )}
            <div className="linkAndButtonDiv">
              <Link to='/movies'>
              <button onClick={() => clickHandler(singleMovie.imdbID)} className="singleMovieButton">Add to favorites</button>
              </Link>
              <Link style={{ width: "auto" }} to="/movies">
                <button className="singleMovieButton">Back to movies</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="plotAndRatingsDiv">
          <div className="singleMoviePlotDiv">
            <h3>{Plot}</h3>
          </div>
          <div className="ratingsTitleAndRatingsDiv">
            <h3
              className="singleMoviePlotDiv"
              style={{ display: "inline-block" }}
            >
              <div>
                <span role="img" aria-label="stars">
                  ✨✨
                </span>
                Ratings
                <span role="img" aria-label="stars">
                  ✨✨
                </span>
              </div>
              {Ratings &&
                Ratings.map((rating) => {
                  return (
                    <div className="singleMovieRatingsDiv">
                      <p>{rating.Source}</p>
                      <p>{rating.Value}</p>
                    </div>
                  );
                })}
            </h3>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="singleMovieContainer">
      <div className="loadingBarDiv">
        <img src={spinnerGif} alt="loading..." />
      </div>
    </div>
  );
};

export default SingleMovie;
