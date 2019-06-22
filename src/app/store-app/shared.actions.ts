import { Action } from "@ngrx/store";

export enum SharedActionTypes {
  SendContact = "[Shared] Send Contact",
  SendContactSuccess = "[Shared] Send Contact Success",
  SendContactFailure = "[Shared] Send Contact Failure",
  Notify = "[Shared] Notify",
  UnNotify = "[Shared] UnNotify"
}

export class SendContact implements Action {
  readonly type = SharedActionTypes.SendContact;
  constructor(public payload: any) {}
}
export class SendContactSuccess implements Action {
  readonly type = SharedActionTypes.SendContactSuccess;
  constructor(public payload: string) {}
}
export class SendContactFailure implements Action {
  readonly type = SharedActionTypes.SendContactFailure;
  constructor(public payload: string) {}
}
export class Notify implements Action {
  readonly type = SharedActionTypes.Notify;
  constructor(public payload: string) {}
}

export class UnNotify implements Action {
  readonly type = SharedActionTypes.UnNotify;
}
export type SharedActions =
  | SendContact
  | Notify
  | SendContactSuccess
  | SendContactFailure
  | UnNotify;
