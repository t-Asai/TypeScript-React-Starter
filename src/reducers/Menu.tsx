import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/Menu";

const initialState: any = {
  isOpen: false
};

const isOpen = handleActions<any>(
  {
    [actions.CHANGE_MENU_IS_OPEN]: (state, {  }: Action<any>) => !state
  },
  initialState.isOpen
);

export default combineReducers({
  isOpen
});
