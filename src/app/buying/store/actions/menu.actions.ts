import { Action } from "@ngrx/store";
import { MenuItem } from "shared/models/menu-item";

export enum MenuActionTypes {
  LoadMenuActions = "[MenuAction] Load MenuActions",
  LoadMenuEntities = "[MenuAction] Load MenuEntities",
  LoadComplements = "[MenuAction] Load Complements",
  LoadMenuEntitiesSuccess = "[MenuAction] Load MenuEntities Success",
  LoadMenuEntitiesFail = "[MenuAction] Load MenuEntities Fail",
  LoadComplementsSuccess = "[MenuAction] Load Complements Success",
  LoadMenuCommplementsFail = "[MenuAction] Load Complements Fail",
  SearchMenu = "[MenuAction] Search Menu",
  SearchMenuSuccess = "[MenuAction] Search Menu Success"
}

export class LoadMenuActions implements Action {
  readonly type = MenuActionTypes.LoadMenuActions;
}

export class LoadMenuEntities implements Action {
  readonly type = MenuActionTypes.LoadMenuEntities;
}

export class LoadComplements implements Action {
  readonly type = MenuActionTypes.LoadComplements;
  constructor(public payload: MenuItem) {}
}

export class LoadMenuEntitiesSuccess implements Action {
  readonly type = MenuActionTypes.LoadMenuEntitiesSuccess;
  constructor(public payload: MenuItem[]) {}
}

export class LoadMenuEntitiesFail implements Action {
  readonly type = MenuActionTypes.LoadMenuEntitiesFail;
  constructor(public payload: any) {}
}

export class LoadComplementsSuccess implements Action {
  readonly type = MenuActionTypes.LoadComplementsSuccess;
  constructor(public payload: MenuItem[]) {}
}

export class LoadMenuCommplementsFail implements Action {
  readonly type = MenuActionTypes.LoadMenuCommplementsFail;
  constructor(public payload: any) {}
}

export class SearchMenu implements Action {
  readonly type = MenuActionTypes.SearchMenu;
  constructor(public payload: string) {}
}

export class SearchMenuSuccess implements Action {
  readonly type = MenuActionTypes.SearchMenuSuccess;
  constructor(public payload: MenuItem[]) {}
}

export type MenuActions =
  | LoadMenuActions
  | LoadMenuEntities
  | LoadComplements
  | LoadMenuEntitiesSuccess
  | LoadMenuEntitiesFail
  | LoadComplementsSuccess
  | LoadMenuCommplementsFail
  | SearchMenu
  | SearchMenuSuccess;
