import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(isAuth);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <RegisterPage />
        </Route>
        <Route exact path="/">
          {isAuth ? <HomePage /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
