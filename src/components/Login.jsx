import React from "react";
import isUserValidated from "../hooks/IsUserValidated";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import IsButtonDisable from "../hooks/IsButtonDisable";

const Login = ({ changeHandler, submitHandler, user, validCredentials }) => {
  const { validatedUser } = useSelector((state) => state);

  const isValidated = isUserValidated(validatedUser);

  return !isValidated ? (
    <div className="loginMainDiv">
      {!validCredentials ? (
        <h1 className='userRegisterTitle invalidCredentialsTitle'>Invalid Credentials</h1>
        ) : null}
      <form onSubmit={submitHandler} className="loginForm">
        {["username", "password"].map((item, index) => {
          return (
            <input
              onChange={changeHandler}
              type={!index ? "text" : "password"}
              name={item}
              placeholder={item}
              key={index}
              className="registerFormInput"
            ></input>
          );
        })}
        <button
          className="submitButton"
          style={{ width: "auto" }}
          disabled={IsButtonDisable(user)}
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    <Redirect to="/"></Redirect>
  );
};

export default Login;
