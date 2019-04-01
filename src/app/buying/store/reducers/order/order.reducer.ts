import { OrderActions, OrderActionTypes } from "../../actions/order.actions";

export interface OrderState {
  order: { [id: number]: { any } };
  placedOrder: boolean;
  placingOrder: boolean;
}

export const initialState: OrderState = {
  order: {},
  placedOrder: false,
  placingOrder: false
};

export function OrderReducer(
  state = initialState,
  action: OrderActions
): OrderState {
  switch (action.type) {
    case OrderActionTypes.PlaceOrder: {
      return {
        ...state,
        placingOrder: true
      };
    }
    case OrderActionTypes.PlaceOrderSuccess: {
      return {
        ...state,
        placingOrder: false,
        placedOrder: true
      };
    }
    case OrderActionTypes.PlaceOrderFailure: {
      return {
        ...state,
        placedOrder: false,
        placingOrder: false
      };
    }
    default:
      return state;
  }
}
