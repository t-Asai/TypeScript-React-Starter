import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/Hello";

const initialState: HelloState = {
  enthusiasm: 1
};

const enthusiasm = handleActions<HelloState["enthusiasm"]>(
  {
    [actions.INCREMENT_ENTHUSIASM]: (
      state,
      {  }: Action<HelloState["enthusiasm"]>
    ) => state + 1,
    [actions.DECREMENT_ENTHUSIASM]: (
      state,
      {  }: Action<HelloState["enthusiasm"]>
    ) => (state - 1 < 0 ? 0 : state - 1)
  },
  initialState.enthusiasm
);

export default combineReducers({
  enthusiasm
});
