import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { FriendContainer, CardContent } from "./Friend.styles";

const Friend = ({ friend, match }) => {
  console.log(`Friend.js: friend.id: `, friend.id);
  console.log(`Friend.js: match: `, match);
  // const [localFriendState, setLocalFriendState] = useState("");

  const { id, name, age, email, notes } = friend;
  // useEffect(id => getFriends(id), []);

  return (
    <FriendContainer key={id}>
      <CustomLinkContainer alignSelf="flex-start">
        <CustomLink
          height="25px"
          width="45px"
          background="rgb(0, 0, 0, 0.6)"
          to={`${match.path}/edit-friend/${id}`}
        >
          Edit
        </CustomLink>
      </CustomLinkContainer>
      <CardContent>
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{email}</p>
        <p>{notes}</p>
      </CardContent>
    </FriendContainer>
  );
};

const mapPropsToState = state => {
  console.log(`Friend.js: mapPropsToState: state: `, state);
  return {
    friends: state.friend.friends
    // ,
    // singleFriend: state;
  };
};

export default connect(mapPropsToState, { getFriends, postFriend })(
  withRouter(Friend)
);
