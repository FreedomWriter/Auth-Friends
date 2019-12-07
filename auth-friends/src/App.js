import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginForm from "./components/login/Login";
import FriendsList from "./components/FriendsList/FriendsList";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//i<3Lambd4
