import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setValidatedUser } from "../store/validatedUser";
import { setMovies } from "../store/movies";
import isUserValidated from "../hooks/IsUserValidated";

const NavBar = ({ usersClickHandler }) => {
  let { validatedUser } = useSelector((state) => state);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setValidatedUser({}));
    dispatch(setMovies([]));
  };

  const isValidated = isUserValidated(validatedUser);

  return (
    <div>
      <nav className="footerDiv">
        <div className="footerFlexItems">
          {isValidated ? (
            <div className="homeAndLoginDiv">
              <Link to="/" className="footerBox">
                Home
              </Link>
              <Link to="/movies" className="footerBox">
                Movies
              </Link>
              <Link to="/favorites" className="footerBox">
                Favorites
              </Link>
            </div>
          ) : (
            <div className="homeAndLoginDiv">
              <Link to="/" className="footerBox">
                Home
              </Link>
            </div>
          )}
          <div className="footerFlexItems">
            {isValidated ? (
              <Link
                onClick={usersClickHandler}
                to="/users"
                className="footerBox"
              >
                Users
              </Link>
            ) : null}
            <Link
              // className="footerFlexItems"
              onClick={() => clickHandler()}
              to={!isValidated ? "/users/login" : "/"}
              className="footerBox"
            >
              {!isValidated ? "Log in" : "Log out"}
            </Link>
            {!isValidated ? (
              <Link to="/users/register" className="footerBox">
                Register
              </Link>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
