import { combineReducers } from "redux";
import hello from "./Hello";
import user from "./User";
import textDiff from "./TextDiff";

export default combineReducers({
  hello,
  user,
  textDiff
});
