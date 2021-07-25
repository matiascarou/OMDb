import React from "react";
import { Link } from "react-router-dom";

const NoUserContainer = () => {
  return (
    <div className="noUserContainerDiv">
      <h1>Welcome!</h1>
      <div className="registerAndLoginButtonsDiv">
        <Link to="/users/register">
          <button className="footerBox" className='mainPageButtons'>Register</button>
        </Link>
        <Link to='/users/login'>
          <button className="footerBox" className='mainPageButtons'>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NoUserContainer;
