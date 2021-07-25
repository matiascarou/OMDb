import React from "react";
import Register from "../components/Register";
import { useState } from "react";
import { setPaginationCounter } from "../store/paginationCounter";
import { useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom'
import axios from "axios";

const RegisterContainer = () => {
  const [userDoesExist, setUserDoesExist] = useState(false)

  const [ registeredUser, setRegisteredUser ] = useState(false)

  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

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
      .post("/api/register", user)
      .then((user) => {
        setRegisteredUser(true)
        dispatch(setPaginationCounter(1));
        setUserDoesExist(false)
        return <Redirect to="/"></Redirect>
      })
      .catch((err) => setUserDoesExist(true));
  };

  return (
    <div>
      <Register
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        user={user}
        registeredUser={registeredUser}
        userDoesExist={userDoesExist}
      />
    </div>
  );
};

export default RegisterContainer;
