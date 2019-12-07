const LOGIN_POST_START = "LOGIN_POST_START";
const LOGIN_POST_SUCCESS = "LOGIN_POST_SUCCESS";
const LOGIN_POST_FAILURE = "LOGIN_POST_FAILURE";

const initialState = {
  userName: "",
  password: ""
};

const loginReducer = (state = initialState, action) => {
  console.log(`redux: loginReducers: index.js`, state);
  console.log(`redux: loginReducers: index.js`, action);
  switch (action.type) {
    case LOGIN_POST_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_POST_SUCCESS:
      console.log(
        `redux: loginReducers: index,js: LOGIN_POST_SUCCESS: action.payload: `,
        action.payload
      );
      return {
        ...state,
        LOGIN: action.payload,
        isLoading: false
      };
    case LOGIN_POST_FAILURE:
      console.log(
        `redux: loginReducers: index,js: LOGIN_POST_FAILURE: action.payload: `,
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

export default loginReducer;
