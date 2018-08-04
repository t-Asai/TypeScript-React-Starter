import { createActions } from "redux-actions";

export const CHANGE_MENU_IS_OPEN: string = "CHANGE_MENU_IS_OPEN";
type CHANGE_MENU_IS_OPEN = typeof CHANGE_MENU_IS_OPEN;

interface ChangeMenuIsOpen {
  type: CHANGE_MENU_IS_OPEN;
}

export type MenuActionsType = ChangeMenuIsOpen;

export default createActions({
  [CHANGE_MENU_IS_OPEN]: (payload: boolean): boolean => payload
});
