import { PlateItem } from "shared/models/plate-item";
import { PlateActions, PlateActionTypes } from "../../actions/plate.actions";

export interface PlateState {
  entities: { [id: number]: PlateItem };
  totalPrice: number;
  totalItems: number;
}

export const initialState: PlateState = {
  entities: {},
  totalPrice: 0,
  totalItems: 0
};

export function PlateReducer(
  state = initialState,
  action: PlateActions
): PlateState {
  switch (action.type) {
    case PlateActionTypes.LoadPlates: {
      return {
        ...state
      };
    }
    case PlateActionTypes.AddItem: {
      const item = action.payload;
      const plateItem: PlateItem = {
        total_price: Number(item.it_price),
        total_qty: 1
      };
      const entities = {
        ...state.entities,
        [item._id]: plateItem
      };
      return {
        ...state,
        entities,
        totalPrice: state.totalPrice + Number(item.it_price),
        totalItems: state.totalItems + 1
      };
    }
    case PlateActionTypes.RemoveItem: {
      const item = action.payload;
      const { [item._id]: _removedItem, ...entities } = state.entities;
      const totalPrice = state.totalPrice - _removedItem.total_price;
      const totalItems = state.totalItems - _removedItem.total_qty;
      return {
        ...state,
        entities,
        totalItems,
        totalPrice
      };
    }
    case PlateActionTypes.AddItemQuantity: {
      const item = action.payload;
      const { [item._id]: _updatedItem, ...others } = state.entities;
      const updatedItem: PlateItem = {
        ..._updatedItem,
        total_price: _updatedItem.total_price + Number(item.it_price),
        total_qty: _updatedItem.total_qty + 1
      };
      const entities = {
        ...others,
        [item._id]: updatedItem
      };
      return {
        ...state,
        entities,
        totalPrice: state.totalPrice + Number(item.it_price),
        totalItems: state.totalItems + 1
      };
    }
    case PlateActionTypes.ReduceItemQuantity: {
      const item = action.payload;
      const { [item._id]: _updatedItem, ...others } = state.entities;
      const updatedItem: PlateItem = {
        ..._updatedItem,
        total_price: _updatedItem.total_price - Number(item.it_price),
        total_qty: _updatedItem.total_qty - 1
      };
      let entities = {};
      if (updatedItem.total_qty < 1) {
        entities = {
          ...others
        };
      } else {
        entities = {
          ...others,
          [item._id]: updatedItem
        };
      }

      return {
        ...state,
        entities,
        totalPrice: state.totalPrice - Number(item.it_price),
        totalItems: state.totalItems - 1
      };
    }
    case PlateActionTypes.UpdatePlateSuccess: {
      const plate = action.payload;
      return {
        ...state
      };
    }
    case PlateActionTypes.UpdatePlateError: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}

export const getTotalPrice = (state: PlateState) => state.totalPrice;
export const getPlateEntities = (state: PlateState) => state.entities;
