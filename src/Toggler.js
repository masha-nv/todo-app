import React from "react";
import useToggle from "./hooks/useToggle";

const Toggler = () => {
  const [isHappy, setIsHappy] = useToggle(true);

  return (
    <div>
      <h1>{isHappy ? ":)" : ":("}</h1>
      <button onClick={setIsHappy}>toggle mood</button>
    </div>
  );
};
export default Toggler;
