import React from "react";
import { useSelector, useDispatch } from "react-redux";
import isUserValidated from "../hooks/IsUserValidated";
import SingleUserInfo from "./SingleUserInfo";

const SingleUser = ({ changeHandler, submitHandler }) => {
  const { singleUser } = useSelector((state) => state);

  const dispatch = useDispatch();

  const isValidated = isUserValidated(singleUser);

  return !isValidated ? (
    <div className="usersFormDiv">
      <div className="forEachUsernameDiv">
        <h1>Search for a user</h1>
      </div>
      <form onSubmit={submitHandler}>
        <input
          onChange={changeHandler}
          name="username"
          type="text"
          className="inputForm"
          placeholder="Search for a user..."
        ></input>
      </form>
    </div>
  ) : (
    <SingleUserInfo singleUser={singleUser} />
  );
};

export default SingleUser;
