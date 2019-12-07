import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";
// import AddFriend from "../login/add-friend/addFriend.component";

const FriendsList = ({ getFriends, friends }) => {
  console.log(`FriendsList.js: friends: `, friends);

  useEffect(() => {
    getFriends();
  }, []);

  // const handleSubmit = id => {
  //   console.log(`AddFriend.js: handleSubmit: id: `, id);
  //   postFriend(id);
  // };

  return (
    <div>
      <Link to="/add-friend">Add A Friend</Link>
      {friends.map(friend => {
        console.log(friend);
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            {/* <AddFriend onClick={() => handleSubmit(friend.id)} /> */}
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

export default connect(mapPropsToState, { getFriends, postFriend })(
  FriendsList
);
