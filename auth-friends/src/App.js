import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginForm from "./components/login/Login";
import Logout from "./components/logout/logout";
import FriendsList from "./components/FriendsList/FriendsList";
import AddFriend from "./components/login/add-friend/addFriend.component";

function App() {
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Router>
      <div>
        <ul>
          {token ? (
            <Logout handleSubmit={handleSubmit} />
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/add-friend" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//i<3Lambd4
