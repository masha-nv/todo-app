import { useState } from "react";

const useHandleChange = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const clearInput = () => {
    setValue("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearInput();
  };
  return [value, handleChange, handleSubmit];
};

export default useHandleChange;
