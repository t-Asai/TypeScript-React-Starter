import { createActions } from "redux-actions";

export const UPDATE_NAME: string = "UPDATE_NAME";
type UPDATE_NAME = typeof UPDATE_NAME;
export const SIGN_IN: string = "SIGN_IN";
type SIGN_IN = typeof SIGN_IN;
export const SIGN_OUT: string = "SIGN_OUT";
type SIGN_OUT = typeof SIGN_OUT;
export const CHECK_AUTH: string = "CHECK_AUTH";
type CHECK_AUTH = typeof CHECK_AUTH;

interface UpdateName {
  type: UPDATE_NAME;
}

interface SignIn {
  type: SIGN_IN;
}

interface SignOut {
  type: SIGN_OUT;
}

interface CheckAuth {
  type: CHECK_AUTH;
}

export type UserActionsType = UpdateName | SignIn | SignOut | CheckAuth;

export default createActions({
  [UPDATE_NAME]: (payload: string): string => payload,
  [SIGN_IN]: undefined,
  [SIGN_OUT]: undefined,
  [CHECK_AUTH]: undefined
});
