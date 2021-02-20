import { useState } from "react";

const useForm = (initialInputValue) => {
  const [input, setInput] = useState(initialInputValue);
  const handleChangeInput = (e) => setInput(e.target.value);
  const clearInput = () => setInput("");
  return {
    input,
    handleChangeInput,
    clearInput,
  };
};

export default useForm;
