import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

import MarketingPage from "./pages/marketing-page/MarketingPage.component";
import Header from "./components/header/Header";
import LoginForm from "./components/login/Login";
import SignUpForm from "./components/signup/SignUp";
import FriendsList from "./components/FriendsList/FriendsList";
import AddFriend from "./components/add-friend/AddFriend.component";
import EditFriend from "./components/edit-friend/EditFriend";

import { GlobalStyle } from "./GlobalStyles";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div>
        <GlobalStyle />
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
