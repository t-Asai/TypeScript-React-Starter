import { combineReducers } from "redux";
import hello from "./Hello";
import user from "./User";

export default combineReducers({
  hello,
  user
});
