import React from "react";
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

// import "./GlobalStyles";
import { GlobalStyle } from "./GlobalStyles";
import {
  CustomLinkContainer,
  CustomLink
} from "./components/custom-link/link.styles";

function App() {
  // console.log(props);
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Switch>
          <Route exact path="/marketing" component={MarketingPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <PrivateRoute path="/" component={Header} />
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

const mapPropsToState = state => {
  return {
    friends: state.friends
  };
};
export default connect(mapPropsToState)(App);

//i<3Lambd4
