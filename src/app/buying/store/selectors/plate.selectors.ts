import { createSelector } from "@ngrx/store";
import { getBuyingState, BuyingState } from "../index";
import { PlateState } from "../reducers/plate/plate.reducer";
import { PlateItem } from "shared/models/plate-item";
import { MenuItem } from "shared/models/menu-item";
import { getMenuEntities } from "./menu.selectors";

export const getPlateState = createSelector(
  getBuyingState,
  (state: BuyingState) => state.Plate
);

export const getPlateEntities = createSelector(
  getPlateState,
  (state: PlateState) => state.entities
);
export const getPlateItems = createSelector(
  getPlateEntities,
  getMenuEntities,
  (plateEntities, menuEntities): any[] => {
    return Object.keys(plateEntities).map(id => {
      return { ...menuEntities[id], ...plateEntities[id] };
    });
  }
);

export const getPlateTotal = createSelector(
  getPlateState,
  (state: PlateState) => state.totalPrice
);

export const getNumberOfItems = createSelector(
  getPlateState,
  (state: PlateState) => state.totalItems
);

export const getPlateDetails = createSelector(
  getPlateTotal,
  getNumberOfItems,
  (totalPrice: number, totalItems: number) => {
    return {
      totalPrice,
      totalItems
    };
  }
);
export const getItemQty = item =>
  createSelector(
    getPlateEntities,
    (items): number => {
      return items.hasOwnProperty(item._id) ? items[item._id].total_qty : 0;
    }
  );
