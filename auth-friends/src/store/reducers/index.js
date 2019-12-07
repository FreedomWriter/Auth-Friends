import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import friendReducer from "./friendReducer";
import loginReducer from "./loginReducer";

const persistConfig = {
  key: "root",
  storage,
  //whitelist is an array containg the names of any reducers we want to persist
  whitelist: ["loginReducer", "friendReducer"]
};

const rootReducer = combineReducers({
  friend: friendReducer,
  login: loginReducer
});

export default persistReducer(persistConfig, rootReducer);
