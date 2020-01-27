import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getFriends, postFriend } from "../../store/actions/friend.actions";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { FriendContainer, Card } from "./Friend.styles";

const Friend = ({ friend, match }) => {
  const { id, name, birthday, email, notes, phoneNumber } = friend;

  return (
    <FriendContainer key={id}>
      <CustomLinkContainer alignSelf="flex-start">
        <CustomLink
          paddingAll="1.5rem"
          background="rgb(0, 0, 0, 0.6)"
          to={`${match.path}/edit-friend/${id}`}
        >
          Edit
        </CustomLink>
      </CustomLinkContainer>
      <Card>
        <>
          <h3>{name}</h3>
          <p>Birthday: {birthday}</p>
        </>
        <>
          <p>Email: {email}</p>
        </>
        <>
          <p>Phone Number: {phoneNumber}</p>
        </>
        <>
          <p>Notes: {notes}</p>
        </>
      </Card>
    </FriendContainer>
  );
};

const mapPropsToState = state => {
  return {
    friends: state.friend.friends
  };
};

export default connect(mapPropsToState, { getFriends, postFriend })(
  withRouter(Friend)
);
