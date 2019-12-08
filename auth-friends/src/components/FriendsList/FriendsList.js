import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute";

import { getFriends, postFriend } from "../../store/actions/friend.actions";
// import EditFriend from "../edit-friend/EditFriend";
import Friend from "../friend/Friend.component";

const FriendsList = ({ getFriends, friends, match }) => {
  console.log(`FriendsList.js: friends: `, friends);
  console.log(`FriendsList.js: match: `, match);

  useEffect(() => {
    getFriends();
  }, []);

  const handleSubmit = id => {
    console.log(`AddFriend.js: handleSubmit: id: `, id);
    postFriend(id);
  };

  return (
    <div>
      <Link to="/add-friend">Add A Friend</Link>
      {friends.map(friend => {
        console.log(friend);
        // const { id, name, age, email, notes } = friend;
        return <Friend key={friend.id} friend={friend} />;
      })}
      {/* <PrivateRoute path={`/edit-friend/:id`} component={EditFriend} /> */}
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
  withRouter(FriendsList)
);
