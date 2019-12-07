import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFriends } from "../../store/actions/friend.actions";

const FriendsList = ({ getFriends, friends }) => {
  console.log(`FriendsList.js: friends: `, friends);

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      {friends.map(friend => {
        console.log(friend);
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapPropsToState = state => {
  console.log(`FriendsList.js: mapPropsToState: state: `, state);
  return {
    friends: state.friend.friends
  };
};

export default connect(mapPropsToState, { getFriends })(FriendsList);
