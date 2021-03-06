import { axiosWithAuth } from "../../axiosWithAuth";

export const LOGIN_POST_START = "LOGIN_POST_START";
export const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
export const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

export const postLogin = value => dispatch => {
  dispatch({ type: LOGIN_POST_START, payload: value });
  axiosWithAuth()
    .post(`/login`, value)
    .then(res => {
      dispatch({
        type: LOGIN_POST_SUCCESS,
        payload: res.data.payload
      });
      localStorage.setItem("token", res.data.payload);
      window.location.href = "/protected";
    })
    .catch(err => {
      dispatch({
        type: LOGIN_POST_FAILURE,
        payload: err
      });
    });
};
