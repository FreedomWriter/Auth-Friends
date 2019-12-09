import {
  FRIENDS_LOAD_START,
  FRIENDS_LOAD_SUCCESS,
  FRIENDS_LOAD_FAILURE,
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
  singleFriend: "",
  isLoading: false
};

const friendReducer = (state = initialState, action) => {
  console.log(`redux: reducers: index.js`, state);
  // console.log(`redux: reducers: index.js`, action);
  switch (action.type) {
    case FRIENDS_LOAD_START:
      //   console.log(`FRIENDS_LOAD_START INITIATED`);
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_LOAD_SUCCESS:
      // console.log(
      //   `redux: reducers: index,js: FRIENDS_LOAD_SUCCESS: action.payload: `,
      //   action.payload
      // );
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
    case FRIENDS_POST_START:
      console.log(
        `redux: reducers: index,js: FRIENDS_POST_START: action.payload: `,
        action.payload
      );
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_POST_SUCCESS:
      console.log(
        `redux: reducers: index,js: FRIENDS_POST_SUCCESS: action.payload: `,
        action.payload
      );
      return {
        ...state,
        friends: [...state.friends, action.payload],
        isLoading: false
      };
    case FRIENDS_POST_FAILURE:
      console.log(
        `redux: reducers: index,js: FRIENDS_POST_FAILURE: action.payload: `,
        action.payload
      );
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FRIENDS_PUT_START:
      console.log(
        `redux: reducers: index,js: FRIENDS_PUT_START: action.payload: `,
        action.payload
      );
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_PUT_SUCCESS:
      console.log(
        `redux: reducers: index,js: FRIENDS_PUT_START: action.payload: `,
        action.payload
      );
      return {
        ...state,
        friends: [...state.friends, action.payload.friends],
        notes: [action.payload.notes]
      };
    case FRIENDS_PUT_FAILURE:
      console.log(
        `redux: reducers: index,js: FRIENDS_PUT_FAILURE: action.payload: `,
        action.payload
      );
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case FRIENDS_DELETE_START:
      console.log(
        `redux: reducers: index,js: FRIENDS_DELETE_START: action.payload: `,
        action.payload
      );
      return {
        ...state,
        isLoading: true
      };
    case FRIENDS_DELETE_SUCCESS:
      console.log(
        `redux: reducers: index,js: FRIENDS_DELETE_START: action.payload: `,
        action.payload
      );
      return {
        ...state,
        friends: [action.payload]
      };
    case FRIENDS_DELETE_FAILURE:
      console.log(
        `redux: reducers: index,js: FRIENDS_DELETE_FAILURE: action.payload: `,
        action.payload
      );
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
