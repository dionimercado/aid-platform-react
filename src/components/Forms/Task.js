import React, { useState } from "react";
import styled from "styled-components";

function Task({ submit, ...rest }) {
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

    // if (!data.email) errors.email = `Must enter your email address`;
    // if (!data.password) errors.password = `Must enter your password`;

    return errors;
  };

  const handleClose = (e) => {
    e.preventDefault();

    submit({});
  };

  return (
    <Wrapper {...rest}>
      <form onSubmit={handleSubmit} className="shadow-sm card">
        <Close onClick={handleClose}>&times;</Close>
        <div className="card-body p-5">
          <h1 className="h2 mb-4 fw-normal">Add a New Task</h1>
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
            <div className="invalid-feedback text-start mb-3">
              {errors.email}
            </div>
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
        </div>
        <div className="card-footer">
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Submit Task
          </button>
        </div>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;

  opacity: 0;

  &.open {
    opacity: 1;
    z-index: 9999;
  }

  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100vh;
  text-align: center;

  form {
    width: 100%;
    max-width: 375px;
    margin: auto;
    background-color: #fff;
    position: relative;

    transition: all 0.5s ease;
    transform: translateY(-50px);
    opacity: 0;
  }

  &.open form {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Close = styled.button`
  background-color: red;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  padding: 0;

  display: flex;
  justify-content: center;

  position: absolute;
  top: -20px;
  right: -20px;
`;

export default Task;
