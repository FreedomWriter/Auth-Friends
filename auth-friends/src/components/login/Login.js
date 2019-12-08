import React, { useState } from "react";
// import { withRouter } from "react-router-dom";
import useForm from "react-hook-form";
import { connect } from "react-redux";

import { postLogin } from "../../store/actions/login.actions";

const LoginForm = ({ postLogin, history }) => {
  //   console.log(props);
  const [localUserName, setLocalUserName] = useState("");
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(`Login.js: onSubmit: values: `, values);
    postLogin(values);
    setLocalUserName(values.username);
  };
  console.log(`username: `, localUserName);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        aria-label="user name"
        placeholder="Enter User Name"
        name="username"
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
        aria-label="password"
        placeholder="Enter Password"
        name="password"
        type="password"
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

      <button type="submit">Submit</button>
    </form>
  );
};

// const mapStateToProps = state => {
//   console.log(`LogIn.js: mapStateToProps: state: `, state);
//   return {
//     state
//   };
// };
export default connect(null, { postLogin })(LoginForm);
