import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    return JSON.parse(
      window.localStorage.getItem(key) || JSON.stringify(defaultVal)
    );
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useLocalStorageState;