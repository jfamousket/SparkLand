import { Action } from "@ngrx/store";

export enum SharedActionTypes {
  SendContact = "[Shared] Send Contact",
  Notify = "[Shared] Notify"
}

export class SendContact implements Action {
  readonly type = SharedActionTypes.SendContact;
  constructor(public payload: any) {}
}

export class Notify implements Action {
  readonly type = SharedActionTypes.Notify;
  constructor(public payload: any) {}
}
export type SharedActions = SendContact | Notify;
