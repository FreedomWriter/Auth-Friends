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
      console.log(
        `actions: get-actions: axiosWithAuth().then: res.data: `,
        res.data
      );
      dispatch({
        type: FRIENDS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(`actions: get-actions: axiosWithAuth().catch: err: `, err);
      dispatch({
        type: FRIENDS_LOAD_FAILURE,
        payload: "error loading friends"
      });
    });
};

export const postFriend = value => dispatch => {
  dispatch({ type: FRIENDS_POST_START, payload: value });
  console.log(`postFRIEND: `, value);
  axiosWithAuth()
    .post(`/friends`, value)
    .then(res => {
      console.log(
        `redux: post-actions: axiosWithAuth(): then: res.data: `,
        res
      );
      dispatch({
        type: FRIENDS_POST_SUCCESS,
        payload: res.data
      });
      window.location.href = "/protected";
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FRIENDS_POST_FAILURE,
        payload: "error posting data"
      });
    });
};

export const putFriend = (value, id) => dispatch => {
  dispatch({ type: FRIENDS_PUT_START, payload: value });
  console.log(`PUTFRIEND: value: `, value);
  axiosWithAuth()
    .put(`/friends/${id}`, value)
    .then(res => {
      console.log(`redux: PUT-actions: axiosWithAuth(): then: res.data: `, res);
      dispatch({
        type: FRIENDS_PUT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FRIENDS_PUT_FAILURE,
        payload: "error putting data"
      });
    });
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: FRIENDS_DELETE_START });
  console.log(`DELETE FRIEND: id: `, id);
  axiosWithAuth()
    .delete(`/friends/${id}`)
    .then(res => {
      console.log(
        `redux: DELETE-actions: axiosWithAuth(): then: res.data: `,
        res
      );
      dispatch({
        type: FRIENDS_DELETE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FRIENDS_DELETE_FAILURE,
        payload: "error deleting data"
      });
    });
};
