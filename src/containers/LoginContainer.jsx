import React from "react";
import Login from "../components/Login";
import { useState } from "react";
import axios from "axios";
import { setValidatedUser } from "../store/validatedUser";
import { setPaginationCounter } from "../store/paginationCounter";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const [validCredentials, setValidCredentials] = useState(true)

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    e.preventDefault();
    let value = e.target.value;
    let key = e.target.name;
    setUser({ ...user, [key]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", user)
      .then((user) => {
        dispatch(
          setValidatedUser({ user: user.data.user, token: user.data.token })
        );
        dispatch(setPaginationCounter(1));
        setValidCredentials(true)
      })
      .catch((err) => {
        setValidCredentials(false)
      });
    e.target.reset();
  };

  return (
    <div>
      <Login changeHandler={changeHandler} submitHandler={submitHandler} user={user} validCredentials={validCredentials}/>
    </div>
  );
};

export default LoginContainer;
