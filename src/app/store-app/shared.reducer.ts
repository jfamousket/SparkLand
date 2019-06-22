import { SharedActionTypes, SharedActions } from "./shared.actions";

export interface SharedState {
  notification: string;
}

export const initialState: SharedState = {
  notification: ""
};

export function SharedReducer(
  state = initialState,
  action: SharedActions
): SharedState {
  switch (action.type) {
    case SharedActionTypes.SendContactSuccess: {
      const { payload } = action;
      return {
        ...state,
        notification: payload
      };
    }
    case SharedActionTypes.SendContactFailure: {
      const { payload } = action;
      return {
        ...state,
        notification: payload
      };
    }
    case SharedActionTypes.Notify: {
      const { payload } = action;
      return {
        ...state,
        notification: payload
      };
    }
    case SharedActionTypes.UnNotify: {
      return {
        ...state,
        notification: ""
      };
    }
    default:
      return state;
  }
}
