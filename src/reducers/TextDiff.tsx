import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/TextDiff";

const initialState: any = {
  baseText: "",
  nextText: ""
};

const baseText = handleActions(
  {
    [actions.UPDATE_BASE_TEXT]: (state, { payload }: any) => payload
  },
  initialState.baseText
);

const nextText = handleActions(
  {
    [actions.UPDATE_NEXT_TEXT]: (state, { payload }: any) => payload
  },
  initialState.nextText
);

export default combineReducers({
  baseText,
  nextText
});
