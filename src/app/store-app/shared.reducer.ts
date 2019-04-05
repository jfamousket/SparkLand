import { SharedActionTypes, SharedActions } from "./shared.actions";

export interface SharedState {
  notify: boolean;
}

export const initialState: SharedState = {
  notify: false
};

export function SharedReducer(
  state = initialState,
  action: SharedActions
): SharedState {
  switch (action.type) {
    case SharedActionTypes.Notify: {
      return {
        ...state,
        notify: true
      };
    }
    default:
      return state;
  }
}
