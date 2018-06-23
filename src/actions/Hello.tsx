import { createActions } from "redux-actions";

export const INCREMENT_ENTHUSIASM: string = "INCREMENT_ENTHUSIASM";
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
export const DECREMENT_ENTHUSIASM: string = "DECREMENT_ENTHUSIASM";
type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;
export const UPDATE_NAME: string = "UPDATE_NAME";
type UPDATE_NAME = typeof UPDATE_NAME;

interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

interface UpdateName {
  type: UPDATE_NAME;
}

export type EnthusiasmAction =
  | IncrementEnthusiasm
  | DecrementEnthusiasm
  | UpdateName;

export default createActions({
  [INCREMENT_ENTHUSIASM]: () => null,
  [DECREMENT_ENTHUSIASM]: () => null,
  [UPDATE_NAME]: (payload: string): string => payload
});
