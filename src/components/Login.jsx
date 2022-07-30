import React from "react";
import Inputs from "./Input";
import inputs from "./input";

function dada(put) {
  return <Inputs key={put.id} text={put.type} place={put.placeholder} />;
}

function Login() {
  return (
    <form className="form">
      {inputs.map(dada)}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
