import React, { useState, useEffect } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { putFriend, deleteFriend } from "../../store/actions/friend.actions";

import { CustomLink } from "../custom-link/link.styles";

const EditFriend = ({
  state,
  putFriend,
  match,
  deleteFriend,
  getThisFriend
}) => {
  console.log(`EditFriend.js: state: `, state);

  const {
    register,
    handleSubmit,
    // errors,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = values => {
    // values !== "" && console.log(values);
    const id = match.params.id;
    console.log(`EditFriend.js: onSubmit: id: `, id);
    for (let v in values) {
      //   console.log(state.friend[v]);
      if (values[v]) {
        console.log(` v: `, v, `values[v]: `, values[v]);

        putFriend(
          {
            [v]: values[v],
            id
          },
          id
        );
        window.location.href = "/protected";
      }
    }
    console.log(`EditFriend.js: handleSubmit: id: `, values);

    // putFriend(values);
  };
  return (
    <div>
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <h1>Update</h1>
        <label>Name:</label>
        <input name="name" ref={register} />
        {/* <ErrorMessage error={errors.firstName} /> */}

        {/* <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} /> */}

        <label>Email</label>
        <input name="email" ref={register({ pattern: /^\S+@\S+$/i })} />
        {/* <ErrorMessage error={errors.email} /> */}

        <label>Age</label>
        <input name="age" type="number" ref={register({ min: 18 })} />
        {/* <ErrorMessage error={errors.age} /> */}

        <label>Notes</label>
        <textarea name="notes" ref={register} />

        <input disabled={isSubmitting} type="submit" />
      </form>
      {/* <div>
        <DeleteButton id={match.params.id}>Delete</DeleteButton>
      </div> */}
      <CustomLink to="/protected">Back</CustomLink>
      <CustomLink to={match.path} onClick={() => deleteFriend(match.params.id)}>
        Delete
      </CustomLink>
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
