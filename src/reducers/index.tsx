import { combineReducers } from "redux";
import hello from "./Hello";
import user from "./User";
import menu from "./Menu";

export default combineReducers({
  hello,
  user,
  menu
});
