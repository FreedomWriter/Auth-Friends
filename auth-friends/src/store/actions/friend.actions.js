import { axiosWithAuth } from "../../axiosWithAuth";

export const FRIENDS_LOAD_START = "FRIENDS_LOAD_START";
export const FRIENDS_LOAD_SUCCESS = "FRIENDS_LOAD_SUCCESS";
export const FRIENDS_LOAD_FAILURE = "FRIENDS_LOAD_FAILURE";

export const FRIENDS_POST_START = "FRIENDS_POST_START";
export const FRIENDS_POST_SUCCESS = "FRIENDS_POST_SUCCESS";
export const FRIENDS_POST_FAILURE = "FRIENDS_POST_FAILURE";

export const FRIENDS_PUT_START = "FRIENDS_PUT_START";
export const FRIENDS_PUT_SUCCESS = "FRIENDS_PUT_SUCCESS";
export const FRIENDS_PUT_FAILURE = "FRIENDS_PUT_FAILURE";

export const FRIENDS_DELETE_START = "FRIENDS_DELETE_START";
export const FRIENDS_DELETE_SUCCESS = "FRIENDS_DELETE_SUCCESS";
export const FRIENDS_DELETE_FAILURE = "FRIENDS_DELETE_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: FRIENDS_LOAD_START });
  axiosWithAuth()
    .get(`/friends`)
    .then(res => {
      dispatch({
        type: FRIENDS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FRIENDS_LOAD_FAILURE,
        payload: "error loading friends"
      });
    });
};

export const postFriend = value => dispatch => {
  dispatch({ type: FRIENDS_POST_START, payload: value });
  axiosWithAuth()
    .post(`/friends`, value)
    .then(res => {
      dispatch({
        type: FRIENDS_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FRIENDS_POST_FAILURE,
        payload: "error posting data"
      });
    });
};

export const putFriend = (value, id) => dispatch => {
  dispatch({ type: FRIENDS_PUT_START, payload: value });
  axiosWithAuth()
    .put(`/friends/${id}`, value)
    .then(res => {
      dispatch({
        type: FRIENDS_PUT_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/protected"))
    .catch(err => {
      dispatch({
        type: FRIENDS_PUT_FAILURE,
        payload: "error putting data"
      });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: FRIENDS_DELETE_START });
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      dispatch({
        type: FRIENDS_DELETE_SUCCESS,
        payload: res.data
      });
    })
    .then(() => (window.location.href = "/protected"))
    .catch(err => {
      dispatch({
        type: FRIENDS_DELETE_FAILURE,
        payload: "error deleting data"
      });
    });
};
