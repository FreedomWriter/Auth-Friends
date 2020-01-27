import {
  FRIENDS_LOAD_START,
  FRIENDS_LOAD_SUCCESS,
  FRIENDS_LOAD_FAILURE,
  FRIEND_LOAD_START,
  FRIEND_LOAD_SUCCESS,
  FRIEND_LOAD_FAILURE,
  FRIENDS_POST_START,
  FRIENDS_POST_SUCCESS,
  FRIENDS_POST_FAILURE,
  FRIENDS_PUT_START,
  FRIENDS_PUT_SUCCESS,
  FRIENDS_PUT_FAILURE,
  FRIENDS_DELETE_START,
  FRIENDS_DELETE_SUCCESS,
  FRIENDS_DELETE_FAILURE
} from "../actions/friend.actions";

const initialState = {
  userName: "",
  password: "",
  friends: [],
  // notes: '',
  singleFriend: {},
  isLoading: false
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_LOAD_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false
      };
    case FRIENDS_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FRIEND_LOAD_START:
      return {
        ...state,
        isLoading: true
      };
    case FRIEND_LOAD_SUCCESS:
      return {
        ...state,
        singleFriend: action.payload,
        isLoading: false
      };
    case FRIEND_LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FRIENDS_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_POST_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isLoading: false
      };
    case FRIENDS_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FRIENDS_PUT_START:
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_PUT_SUCCESS:
      return {
        ...state,
        friends: [...state.friends, action.payload.friends],
        notes: [action.payload.notes]
      };
    case FRIENDS_PUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case FRIENDS_DELETE_START:
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_DELETE_SUCCESS:
      return {
        ...state,
        friends: [action.payload]
      };
    case FRIENDS_DELETE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default friendReducer;
