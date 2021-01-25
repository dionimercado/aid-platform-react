import React, { useContext, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./context";
import reducer from "./reducer";

const Root = () => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("JWT");
    console.log({ token });
    if (token) dispatch({ type: "LOGIN", payload: { token } });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <App />
      </Router>
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
