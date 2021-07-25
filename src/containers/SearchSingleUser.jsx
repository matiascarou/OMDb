import React from "react";
import SingleUser from "../components/SingleUser";
import { useSelector, useDispatch } from "react-redux";
import { setSearchUser } from "../store/searchUser";
import { setSingleUser } from "../store/singleUser";
import axios from "axios";

const SearchSingleUser = () => {

  const { searchUser } = useSelector((store) => store);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let { value } = e.target;
    dispatch(setSearchUser({ [key]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/users/${searchUser.username}`)
      .then((res) => dispatch(setSingleUser(res.data)));
  };

  return (
    <SingleUser changeHandler={changeHandler} submitHandler={submitHandler} />
  );
};

export default SearchSingleUser;
