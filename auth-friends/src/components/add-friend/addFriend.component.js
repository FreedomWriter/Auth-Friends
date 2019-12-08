import React from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    <div>
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

        <label>Notes</label>
        <textarea name="notes" ref={register} />

        <input disabled={isSubmitting} type="submit" />
      </form>
      <Link to="/protected">Back</Link>
    </div>
    // <div>
    //   <CustomButton>I'm adding a friend</CustomButton>
    // </div>
  );
};
const mapStateToProps = state => {
  console.log(`AddFriend.js: mapStateToProps: state: `, state);
  return {
    state
  };
};
export default connect(mapStateToProps, { postFriend })(AddFriend);
