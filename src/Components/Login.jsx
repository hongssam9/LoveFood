import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const initialState = { username: "", password: "" };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (ev) =>
    setFormState({ ...formState, [ev.target.id]: ev.target.value });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <form onSubmit={handleSubmit} >
      {/* <div>{JSON.stringify(formState)}</div> */}
      <label htmlFor="username">Username </label>
      <input
        type="username"
        id="username"
        onChange={handleChange}
        value={formState.username}
      />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        id="password"
        onChange={handleChange}
        value={formState.password}
      />
      <button>Submit</button>
    </form>
  );
};

export default Login;
