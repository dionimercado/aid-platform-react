import { Redirect, Route } from "react-router-dom";
import "./App.css";
import { Login, Home } from "./pages";
import { Header } from "./components/Layout";
import Context from "./context";
import { useEffect, useContext } from "react";

function App() {
  const { state } = useContext(Context);

  useEffect(() => {}, []);

  console.log({ state });
  return (
    <>
      <Header />
      {!state.user.token ? (
        <Route path="/" component={Login} />
      ) : (
        <Route exact path="/" component={Home} />
      )}
    </>
  );
}

export default App;
