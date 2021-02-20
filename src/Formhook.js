import React from "react";
import useForm from "./hooks/useForm";

const FormHook = () => {
  const {
    input: email,
    handleChangeInput: setEmail,
    clearInput: clear,
  } = useForm();
  //   const [password, setPassword] = useForm();
  //   const [address, setAddress, clear] = useForm();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h1>Form Hook|| your email is {email}</h1>
      <input type="text" onChange={setEmail} value={email} />
      {/* <input type="password" onChange={setPassword} value={password} />
      <input type="text" onChange={setAddress} value={address} /> */}
      <button onClick={clear}>Submit</button>
    </form>
  );
};

export default FormHook;
