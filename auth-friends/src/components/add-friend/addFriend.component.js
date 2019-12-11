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
        ref={register}
      />

      <input
        className="input"
        arial-label="email"
        placeholder="email@email.com"
        id="email"
        name="email"
        ref={register}
      />

      <input
        className="input"
        arial-label="Birth Day"
        placeholder="Birth Day"
        id="birthday"
        name="birthday"
        type="text"
        ref={register}
      />

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
