import { createActions } from "redux-actions";

export const INCREMENT_ENTHUSIASM: string = "INCREMENT_ENTHUSIASM";
type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;
export const DECREMENT_ENTHUSIASM: string = "DECREMENT_ENTHUSIASM";
type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type HelloActionsType = IncrementEnthusiasm | DecrementEnthusiasm;

export default createActions({
  [INCREMENT_ENTHUSIASM]: () => null,
  [DECREMENT_ENTHUSIASM]: () => null
});
