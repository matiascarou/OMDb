import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NoUserContainer from "../containers/NoUserContainer";
import isUserValidated from "../hooks/IsUserValidated";

const MainSearch = ({
  submitHandler,
  changeHandler,
  clickHandler,
  notSubmitButtonsArray,
}) => {
  const formArray = ["Title...", "Year..."];
  const queries = ["s", "y"];

  let { validatedUser } = useSelector((state) => state);

  const isValidated = isUserValidated(validatedUser);

  return isValidated ? (
    <div className="mainFormDiv">
      <h1 style={{ padding: "40px 10px 20px", margin: "0" }}>
        Search for a movie!
      </h1>
      <form onSubmit={submitHandler}>
        {formArray.map((item, index) => {
          return (
            <input
              onChange={changeHandler}
              type="text"
              name={queries[index]}
              placeholder={item}
              key={index}
              className="inputForm"
            ></input>
          );
        })}
        <div className="notSubmitButtonsDiv">
          {notSubmitButtonsArray.map((item) => {
            return (
              <button
                key={item.name}
                className={`notSubmitButtonForm ${
                  item.isChecked ? "notSubmitButtonFocus" : ""
                }`}
                onClick={clickHandler}
                type="button"
                name={item.name}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <Link to="/movies">
          <button className="submitButton" style={{ width: "auto" }}>
            Submit
          </button>
        </Link>
      </form>
    </div>
  ) : (
    <NoUserContainer />
  );
};

export default MainSearch;
