import { useState } from "react";

const useCount = (initialVal = 0) => {
  const [state, setState] = useState(initialVal);
  const increment = () => setState(state + 1);
  return [state, increment];
};

export default useCount;
