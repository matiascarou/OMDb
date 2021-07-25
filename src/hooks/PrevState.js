import React from "react";
import { useEffect, useRef } from "react";

const PrevState = (data) => {
  const ref = React.useRef();
  useEffect(() => {
    ref.current = data;
  }, [data]);

  return ref.current;
};

export default PrevState;
