import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/Hello";
import { HelloState } from "~/types/hello";

const initialState: HelloState = {
  hello: {
    enthusiasm: 0,
    name: "anonimous"
  }
};

const enthusiasm = handleActions<HelloState["hello"]["enthusiasm"]>(
  {
    [actions.INCREMENT_ENTHUSIASM]: (
      state,
      {  }: Action<HelloState["hello"]["enthusiasm"]>
    ) => state + 1,
    [actions.DECREMENT_ENTHUSIASM]: (
      state,
      {  }: Action<HelloState["hello"]["enthusiasm"]>
    ) => (state - 1 < 0 ? 0 : state - 1)
  },
  initialState.hello.enthusiasm
);

const name = handleActions(
  {
    [actions.UPDATE_NAME]: (
      state,
      { payload }: Action<HelloState["hello"]["name"]>
    ) => payload
  },
  initialState.hello.name
);

export default combineReducers({
  enthusiasm,
  name
});
