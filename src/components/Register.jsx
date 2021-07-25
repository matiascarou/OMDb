import React from "react";
import { Redirect } from "react-router-dom";
import IsButtonDisable from "../hooks/IsButtonDisable";

const Register = ({
  changeHandler,
  submitHandler,
  user,
  registeredUser,
  userDoesExist,
}) => {
  return !registeredUser ? (
    <div className="registerMainDiv">
      {IsButtonDisable(user) ? (
        <h1 className="userRegisterTitle">Please fill out all the fields</h1>
      ) : null}
      {userDoesExist ? (
        <h1 className="userRegisterTitle">User Already Exists!</h1>
      ) : null}
      <form onSubmit={submitHandler} className="registerForm">
        {["name", "lastname", "username", "email", "password"].map(
          (item, index) => {
            return (
              <div key={index} className="inputAndErrorSubmittingDiv">
                <input
                  onChange={changeHandler}
                  type={index < 4 ? "text" : "password"}
                  required
                  name={item}
                  placeholder={item}
                  key={index}
                  className="registerFormInput"
                ></input>
              </div>
            );
          }
        )}
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

export default Register;
