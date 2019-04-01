import { createSelector } from "@ngrx/store";

import { getBuyingState, BuyingState } from "../index";
import { MenuState } from "../reducers/menu/menu-reducer.reducer";
import { getRouterState } from "shared/store/index";

import { MenuItem } from "shared/models/menu-item";

export const getMenuState = createSelector(
  getBuyingState,
  (state: BuyingState) => {
    return state.Menu;
  }
);
export const getMenuEntities = createSelector(
  getMenuState,
  (state: MenuState) => state.entities
);
export const getSearchEntities = createSelector(
  getMenuState,
  (state: MenuState) => state.searchResults
);
export const getMenuItems = createSelector(
  getMenuEntities,
  (entities): MenuItem[] => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getSearchItems = createSelector(
  getSearchEntities,
  (entities): MenuItem[] => {
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const categoryFilter = createSelector(
  getRouterState,
  getMenuEntities,
  (router, entities): MenuItem[] => {
    if (router.state && router.state.queryParams.category) {
      const keys = Object.keys(entities).filter(
        id => entities[id].category === router.state.queryParams.category
      );
      return keys.map(id => entities[id]);
    }
    return Object.keys(entities).map(id => entities[id]);
  }
);

export const getCategories = createSelector(
  getMenuEntities,
  (entities): string[] => {
    const keys = Object.keys(entities).map(id => entities[id].category);
    const set = [];
    keys.forEach(key => (set.includes(key) ? null : set.push(key)));
    return set;
  }
);
