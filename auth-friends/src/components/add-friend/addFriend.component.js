import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";

import { postFriend } from "../../store/actions/friend.actions";

import "./AddFriend.styles.css";

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
    <form
      className="form-container add-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1>Add A Friend</h1>

      <input
        className="input"
        arial-label="name"
        placeholder="Name"
        id="name"
        name="name"
        ref={register({ required: true })}
      />
      {/* <ErrorMessage error={errors.firstName} /> */}

      {/* <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} /> */}

      <input
        className="input"
        arial-label="user name"
        placeholder="User Name"
        id="username"
        name="username"
        // onBlur={e => validateUserName(e.target.value)}
        ref={register({ required: true })}
      />
      {/* <ErrorMessage error={errors.username} /> */}

      <input
        className="input"
        arial-label="email"
        placeholder="email@email.com"
        id="email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {/* <ErrorMessage error={errors.email} /> */}

      <input
        className="input"
        arial-label="Birth Day"
        placeholder="Birth Day"
        id="birthday"
        name="birthday"
        type="text"
        ref={register}
      />
      {/* <ErrorMessage error={errors.age} /> */}

      <textarea
        className="input"
        arial-label="Notes"
        placeholder="Notes"
        id="notes"
        name="notes"
        ref={register}
      />

      <button className="btn" disabled={isSubmitting} type="submit">
        Submit
      </button>
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
