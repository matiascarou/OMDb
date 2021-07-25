import React from "react";

const ForwardAndBack = ({ clickHandler }) => {
  return (
    <div className="buttonsDiv">
      <button
        onClick={clickHandler}
        name="nextPage"
        className="nextPageButtonDiv"
      >{`>>`}</button>
      <button
        onClick={clickHandler}
        name="prevPage"
        className="nextPageButtonDiv"
      >{`<<`}</button>
    </div>
  );
};

export default ForwardAndBack;
