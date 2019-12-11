import React, { useState } from "react";
import useForm from "react-hook-form";
import { connect } from "react-redux";

import { postLogin } from "../../store/actions/login.actions";

import "./signup.styles.css";

const SignUpForm = props => {
  const [localUserName, setLocalUserName] = useState("");
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    setLocalUserName(values.username);
  };
  console.log(`username: `, localUserName);
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <p>NOT FUNCTIONAL</p>
      <input
        className="input"
        aria-label="select user name"
        name="username"
        placeholder="Select User Name"
        ref={register({
          required: "Required",
          pattern: {
            value: "",
            message: "Name must be more than one character"
          }
        })}
      />
      {errors.username && errors.username.message}

      <input
        className="input"
        width="400px"
        aria-label="choose a password"
        name="password"
        type="password"
        placeholder="Choose A Password"
        ref={register({
          required: "Required",
          pattern: {
            ninLength: 2,
            maxLength: 15,
            message:
              "Password length must be between 7 and 20 characters, include at least one letter and one number character"
          }
        })}
      />
      {errors.password && errors.password.message}

      <button to="/protected" type="submit">
        Submit
      </button>
    </form>
  );
};

export default connect(null, { postLogin })(SignUpForm);
