import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";

import { postFriend } from "../../../store/actions/friend.actions";

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
    console.log(`AddFriend.js: handleSubmit: id: `, values);
    postFriend(values);
  };
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Add A Friend</h1>
      <label>Name:</label>
      <input name="name" ref={register({ required: true })} />
      {/* <ErrorMessage error={errors.firstName} /> */}

      {/* <label>Last Name:</label>
      <input name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} /> */}

      <label>Username</label>
      <input
        name="username"
        // onBlur={e => validateUserName(e.target.value)}
        ref={register({ required: true })}
      />
      {/* <ErrorMessage error={errors.username} /> */}

      <label>Email</label>
      <input
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {/* <ErrorMessage error={errors.email} /> */}

      <label>Age</label>
      <input
        name="age"
        type="number"
        ref={register({ required: true, min: 18 })}
      />
      {/* <ErrorMessage error={errors.age} /> */}

      <label>About you</label>
      <textarea name="aboutyou" ref={register} />

      <input disabled={isSubmitting} type="submit" />
    </form>
    // <div>
    //   <CustomButton>I'm adding a friend</CustomButton>
    // </div>
  );
};
const mapStateToProps = state => {
  console.log(`LogIn.js: mapStateToProps: state: `, state);
  return {
    state
  };
};
export default connect(mapStateToProps, { postFriend })(AddFriend);
