import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/Hello";

const initialState: { enthusiasmLevel: number; languageName: string } = {
  enthusiasmLevel: 0,
  languageName: "anonimous"
};

const enthusiasm = handleActions(
  {
    [actions.INCREMENT_ENTHUSIASM]: (state, {}) => state + 1,
    [actions.DECREMENT_ENTHUSIASM]: (state, {}) => state - 1
  },
  initialState.enthusiasmLevel
);

export default combineReducers({
  enthusiasm
});
