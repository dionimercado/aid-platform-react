import React, { useContext, useState } from "react";
import axios from "../service";
import { Login as LoginForm } from "../components/Forms";
import Context from "../context";

function Login() {
  const { dispatch } = useContext(Context);
  const [errors, setErrors] = useState({});

  const submit = async (credentials) => {
    try {
      const { data } = await axios("/data.json");
      const user = data.users.filter(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (user.length > 0) {
        dispatch({ type: "LOGIN", payload: { token: "abc123" } });
      } else {
        setErrors({ global: "Something went wrong!" });
      }
      console.log({ user });
    } catch (ex) {
      setErrors({ global: ex.data.message });
    }
  };

  return (
    <>
      {!!errors.global && (
        <div className="alert alert-danger">{errors.global}</div>
      )}
      <LoginForm submit={submit} />
    </>
  );
}

export default Login;
