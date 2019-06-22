import { createSelector } from "@ngrx/store";
import { getSharedState } from ".";
import { SharedState } from "./shared.reducer";

export const getNotification = createSelector(
  getSharedState,
  (state: SharedState) => {
    return state.notification;
  }
);
