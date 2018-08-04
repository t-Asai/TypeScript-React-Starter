import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/Menu";

const initialState: any = {
  isOpen: {
    main: false,
    sub: false
  }
};

const main = handleActions<any>(
  {
    [actions.CHANGE_MAIN_MENU_IS_OPEN]: (state, {  }: Action<any>) => !state
  },
  initialState.isOpen.main
);
const sub = handleActions<any>(
  {
    [actions.CHANGE_SUB_MENU_IS_OPEN]: (state, {  }: Action<any>) => !state
  },
  initialState.isOpen.sub
);

const isOpen = combineReducers({
  main,
  sub
});

export default combineReducers({
  isOpen
});
