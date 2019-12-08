import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";

import { CustomLink } from "../custom-link/link.styles";

const Friend = ({ friend, match }) => {
  console.log(`Friend.js: friend.id: `, friend.id);
  console.log(`Friend.js: match: `, match);

  const { id, name, age, email, notes } = friend;

  return (
    <div>
      <div key={id}>
        <CustomLink to={`${match.path}/edit-friend/${id}`}>Edit</CustomLink>
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{email}</p>
        <p>{notes}</p>
      </div>
    </div>
  );
};

const mapPropsToState = state => {
  console.log(`Friend.js: mapPropsToState: state: `, state);
  return {
    friends: state.friend.friends
  };
};

export default connect(mapPropsToState, { getFriends, postFriend })(
  withRouter(Friend)
);
