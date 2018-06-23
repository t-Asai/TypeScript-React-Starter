import { createActions } from "redux-actions";

export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";
type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export default createActions({
  [INCREMENT_ENTHUSIASM]: undefined,
  [DECREMENT_ENTHUSIASM]: undefined
});
