import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";
import Friend from "../friend/Friend.component";

const FriendsList = ({ getFriends, friends, isLoading }) => {
  useEffect(() => {
    // const test = setTimeout(() => {
    //   getFriends();
    // }, 3000);
    // return test;
    getFriends();
  }, []);

  return (
    <div>
      {friends.map(friend => {
        return <Friend key={friend.id} isLoading={isLoading} friend={friend} />;
      })}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    friends: state.friend.friends,
    isLoading: state.isLoading
  };
};

export default connect(mapPropsToState, { getFriends, postFriend })(
  withRouter(FriendsList)
);
