import { createActions } from "redux-actions";

export const UPDATE_BASE_TEXT: string = "UPDATE_BASE_TEXT";
type UPDATE_BASE_TEXT = typeof UPDATE_BASE_TEXT;
export const UPDATE_NEXT_TEXT: string = "UPDATE_NEXT_TEXT";
type UPDATE_NEXT_TEXT = typeof UPDATE_NEXT_TEXT;

interface UpdateBaseText {
  type: UPDATE_BASE_TEXT;
}

interface UpdateNextText {
  type: UPDATE_NEXT_TEXT;
}

export type TextDiffActionsType = UpdateBaseText | UpdateNextText;

export default createActions({
  [UPDATE_BASE_TEXT]: (payload: string): string => payload,
  [UPDATE_NEXT_TEXT]: (payload: string): string => payload
});
