import React, { useState } from "react";
import styled from "styled-components";

function Login({ submit }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      submit(data);
      // console.log({ data });
    }
  };

  const validate = () => {
    const errors = {};

    if (!data.email) errors.email = `Must enter your email address`;
    if (!data.password) errors.password = `Must enter your password`;

    return errors;
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="shadow-sm p-5">
        <i className="fas fa-parachute-box fa-3x p-3 mb-4 text-danger" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label htmlFor="email" className="visually-hidden">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`form-control ${!!errors.email ? "is-invalid" : ""}`}
          placeholder="Email address"
          autoFocus
          onChange={handleChange}
          value={data.email}
        />
        {!!errors.email && (
          <div className="invalid-feedback text-start mb-3">{errors.email}</div>
        )}
        <label htmlFor="password" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`form-control ${!!errors.email ? "is-invalid" : ""}`}
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
        {!!errors.password && (
          <div className="invalid-feedback text-start mb-3">
            {errors.password}
          </div>
        )}
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  height: 100vh;
  text-align: center;

  form {
    width: 100%;
    max-width: 375px;
    padding: 15px;
    margin: auto;
  }
`;

export default Login;
