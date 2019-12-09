import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { putFriend, deleteFriend } from "../../store/actions/friend.actions";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import "../login/login.styles.css";
import "./EditFriends.styles.css";

const EditFriend = ({ state, putFriend, match, deleteFriend }) => {
  console.log(`EditFriend.js: state: `, state);

  const {
    register,
    handleSubmit,
    // errors,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = values => {
    const id = match.params.id;
    console.log(`EditFriend.js: onSubmit: id: `, id);
    for (let v in values) {
      console.log(state.friend[v]);
      if (values[v]) {
        console.log(` v: `, v, `values[v]: `, values[v]);

        putFriend(
          {
            [v]: values[v],
            id
          },
          id
        );
      }
    }
  };
  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Update</h2>
        <input
          className="input edit-input"
          aria-label="name"
          placeholder="name"
          name="name"
          ref={register}
        />
        {/* <ErrorMessage error={errors.firstName} /> */}

        <input
          className="input edit-input"
          aria-label="email"
          name="email"
          placeholder="email@email.com"
          ref={register({ pattern: /^\S+@\S+$/i })}
        />
        {/* <ErrorMessage error={errors.email} /> */}

        <input
          className="input edit-input"
          aria-label="birthday"
          placeholder="birthday"
          name="Birthday"
          type="number"
          ref={register({ min: 18 })}
        />
        {/* <ErrorMessage error={errors.age} /> */}

        <textarea
          className="input edit-input"
          aria-label="notes"
          placeholder="Notes"
          name="notes"
          ref={register}
        />
        <button disabled={isSubmitting} type="submit">
          Update
        </button>
      </form>
      <CustomLinkContainer
        flexFlow="row nowrap"
        alignItems="center"
        margintop="8%"
      >
        <CustomLink to="/protected" background="rgb(0,0,0,.4)">
          Back
        </CustomLink>
        <CustomLink
          to={match.params.id}
          id={match.params.id}
          onClick={() => deleteFriend(match.params.id)}
          background="rgb(0,0,0,.4)"
        >
          Delete
        </CustomLink>
      </CustomLinkContainer>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(`EditFriend.js: mapStateToProps: state: `, state);
  return {
    friends: state.friends
  };
};
export default connect(mapStateToProps, {
  putFriend,
  deleteFriend
})(withRouter(EditFriend));
