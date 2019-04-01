import { Action } from "@ngrx/store";
import { PlateItem } from "shared/models/plate-item";
import { MenuItem } from "shared/models/menu-item";
import { Plate } from "shared/models/plate";

export enum PlateActionTypes {
  LoadPlates = "[Plate] Load Plates",
  AddItem = "[Plate] Add Item",
  RemoveItem = "[Plate] Remove Item",
  AddItemQuantity = "[Plate] Add Item Quantity",
  ReduceItemQuantity = "[Plate] Reduce Item Quantity",
  UpdatePlateSuccess = "[Plate] Update Plate Success",
  UpdatePlateError = "[Plate] Update Plate Error"
}

export class LoadPlates implements Action {
  readonly type = PlateActionTypes.LoadPlates;
}
export class AddItem implements Action {
  readonly type = PlateActionTypes.AddItem;
  constructor(public payload: MenuItem) {}
}
export class RemoveItem implements Action {
  readonly type = PlateActionTypes.RemoveItem;
  constructor(public payload: MenuItem) {}
}
export class AddItemQuantity implements Action {
  readonly type = PlateActionTypes.AddItemQuantity;
  constructor(public payload: MenuItem) {}
}
export class ReduceItemQuantity implements Action {
  readonly type = PlateActionTypes.ReduceItemQuantity;
  constructor(public payload: MenuItem) {}
}
export class UpdatePlateSuccess implements Action {
  readonly type = PlateActionTypes.UpdatePlateSuccess;
  constructor(public payload: Plate) {}
}
export class UpdatePlateError implements Action {
  readonly type = PlateActionTypes.UpdatePlateError;
  constructor(public payload: MenuItem) {}
}
export type PlateActions =
  | LoadPlates
  | AddItem
  | RemoveItem
  | AddItemQuantity
  | ReduceItemQuantity
  | UpdatePlateSuccess
  | UpdatePlateError;
