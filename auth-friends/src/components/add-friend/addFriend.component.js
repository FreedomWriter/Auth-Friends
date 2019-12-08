import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { CustomLink } from "../custom-link/link.styles";

import { postFriend } from "../../store/actions/friend.actions";

// import CustomButton from "../../custom-button/CustomButton.component";

const AddFriend = ({ state, postFriend, history }) => {
  console.log(`AddFriend.js: props: `, state);
  const {
    register,
    handleSubmit,
    // errors,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = values => {
    console.log(`AddFriend.js: handleSubmit: values: `, values);
    postFriend(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add A Friend</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" ref={register({ required: true })} />
      {/* <ErrorMessage error={errors.firstName} /> */}

      {/* <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} /> */}

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        // onBlur={e => validateUserName(e.target.value)}
        ref={register({ required: true })}
      />
      {/* <ErrorMessage error={errors.username} /> */}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {/* <ErrorMessage error={errors.email} /> */}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        ref={register({ required: true, min: 18 })}
      />
      {/* <ErrorMessage error={errors.age} /> */}

      <label htmlFor="notes">Notes</label>
      <textarea id="notes" name="notes" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
  );
};
const mapStateToProps = state => {
  console.log(`AddFriend.js: mapStateToProps: state: `, state);
  return {
    state
  };
};
export default connect(mapStateToProps, { postFriend })(AddFriend);
