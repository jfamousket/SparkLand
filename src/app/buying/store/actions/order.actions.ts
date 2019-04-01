import { Action } from "@ngrx/store";

export enum OrderActionTypes {
  LoadOrders = "[Order] Load Orders",
  PlaceOrder = "[Order] Place Order",
  PlaceOrderSuccess = "[Order] Place Order Success",
  PlaceOrderFailure = "[Order] Place Order Failure"
}

export class LoadOrders implements Action {
  readonly type = OrderActionTypes.LoadOrders;
}

export class PlaceOrder implements Action {
  readonly type = OrderActionTypes.PlaceOrder;
  constructor(public payload: any) {}
}

export class PlaceOrderSuccess implements Action {
  readonly type = OrderActionTypes.PlaceOrderSuccess;
  constructor(public payload: any) {}
}

export class PlaceOrderFailure implements Action {
  readonly type = OrderActionTypes.PlaceOrderFailure;
  constructor(public payload: any) {}
}

export type OrderActions =
  | LoadOrders
  | PlaceOrder
  | PlaceOrderSuccess
  | PlaceOrderFailure;
