import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./style.css";
import Profile1 from "./views/profile1";
import Lessons from "./views/lessons";
import ForgotPassword from "./views/forgot-password";
import SignUp from "./views/sign-up";
import Login from "./views/login";
import GamePage from "./views/game-page";
import Tutorial from "./views/tutorial";
import Home from "./views/home";
import NotFound from "./views/not-found";
import PrivateRoute from "./PrivateRoutes";
import FGP from "./views/fgpass";
import AIGamePage from "./views/ai-game-page";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Router>
      <Switch>
        <PrivateRoute component={Profile1} exact path="/profile1" />
        <Route component={Lessons} exact path="/lessons" />
        <Route component={ForgotPassword} exact path="/forgot-password" />
        <Route component={FGP} exact path="/fgpass" />

        <Route component={SignUp} exact path="/sign-up" />
        <Route
          exact
          path="/login"
          render={(props) =>
            isAuthenticated ? <Redirect to="/" /> : <Login {...props} />
          }
        />
        <PrivateRoute component={GamePage} exact path="/game-page" />
        <PrivateRoute component={AIGamePage} exact path="/ai-game-page" />
        <PrivateRoute component={Tutorial} exact path="/tutorial" />
        <PrivateRoute component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
