import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";
import Friend from "../friend/Friend.component";
import { Title, Section, CardCenter } from "./FriendsList.styles";

const FriendsList = ({ getFriends, friends, isLoading }) => {
  useEffect(() => {
    // const test = setTimeout(() => {
    //   getFriends();
    // }, 3000);
    // return test;
    getFriends();
  }, []);

  return (
    <Section>
      <Title title="Friends" center />
      <CardCenter>
        {friends.map(friend => {
          return (
            <Friend key={friend.id} isLoading={isLoading} friend={friend} />
          );
        })}
      </CardCenter>
    </Section>
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
