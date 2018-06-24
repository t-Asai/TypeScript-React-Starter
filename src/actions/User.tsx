import { createActions } from "redux-actions";

export const UPDATE_NAME: string = "UPDATE_NAME";
type UPDATE_NAME = typeof UPDATE_NAME;

interface UpdateName {
  type: UPDATE_NAME;
}

export type UserActionsType = UpdateName;

export default createActions({
  [UPDATE_NAME]: (payload: string): string => payload
});
