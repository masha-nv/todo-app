import React from "react";
import useCount from "./hooks/useCount";

const Counter = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={setCount}>click to increment</button>
    </div>
  );
};

export default Counter;
