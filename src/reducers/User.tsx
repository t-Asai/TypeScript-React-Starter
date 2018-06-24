import { handleActions, Action } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "~/actions/User";
import { UserState } from "~/types/User";

const initialState: UserState = {
  name: "anonimous"
};

const name = handleActions(
  {
    [actions.UPDATE_NAME]: (state, { payload }: Action<UserState["name"]>) =>
      payload
  },
  initialState.name
);

export default combineReducers({
  name
});
