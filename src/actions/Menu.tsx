import { createActions } from "redux-actions";

export const CHANGE_MAIN_MENU_IS_OPEN: string = "CHANGE_MAIN_MENU_IS_OPEN";
type CHANGE_MAIN_MENU_IS_OPEN = typeof CHANGE_MAIN_MENU_IS_OPEN;

export const CHANGE_SUB_MENU_IS_OPEN: string = "CHANGE_SUB_MENU_IS_OPEN";
type CHANGE_SUB_MENU_IS_OPEN = typeof CHANGE_SUB_MENU_IS_OPEN;

interface ChangeMainMenuIsOpen {
  type: CHANGE_MAIN_MENU_IS_OPEN;
}

interface ChangeSubMenuIsOpen {
  type: CHANGE_SUB_MENU_IS_OPEN;
}

export type MenuActionsType = ChangeMainMenuIsOpen | ChangeSubMenuIsOpen;

export default createActions({
  [CHANGE_MAIN_MENU_IS_OPEN]: (payload: boolean): boolean => payload,
  [CHANGE_SUB_MENU_IS_OPEN]: (payload: boolean): boolean => payload
});
