import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { MenuReducer, MenuState } from "./reducers/menu/menu-reducer.reducer";
import { PlateState, PlateReducer } from "./reducers/plate/plate.reducer";

import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../../../environments/environment";
import { OrderState, OrderReducer } from "./reducers/order/order.reducer";

export interface BuyingState {
  Menu: MenuState;
  Plate: PlateState;
  Order: OrderState;
}

export const BuyingReducers: ActionReducerMap<BuyingState> = {
  Menu: MenuReducer,
  Plate: PlateReducer,
  Order: OrderReducer
};

export const getBuyingState = createFeatureSelector("buying");

export const metaReducers: MetaReducer<BuyingState>[] = !environment.production
  ? [storeFreeze]
  : [];
