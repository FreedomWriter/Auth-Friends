import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import MarketingPage from "./pages/marketing-page/MarketingPage.component";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";
import SignUpForm from "./components/signup/SignUp";
import FriendsList from "./components/FriendsList/FriendsList";
import AddFriend from "./components/add-friend/addFriend.component";
import EditFriend from "./components/edit-friend/EditFriend";

import { Globals } from "./globals/GlobalStyles";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div>
        <Globals />
        {!token ? <MarketingPage /> : <Header />}
        <Switch>
          <Route exact path="/marketing" component={MarketingPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/add-friend" component={AddFriend} />
          <PrivateRoute
            path={"/protected/edit-friend/:id"}
            component={EditFriend}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//i<3Lambd4
