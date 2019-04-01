import { MenuActions, MenuActionTypes } from "../../actions/menu.actions";

import { MenuItem } from "shared/models/menu-item";

export interface MenuState {
  entities: { [id: number]: MenuItem };
  complements: { [id: number]: MenuItem };
  loadingEntities: boolean;
  loadedEntities: boolean;
  loadingComplements: boolean;
  loadedComplements: boolean;
  searchResults: { [id: number]: MenuItem };
}

export const intialMenuState: MenuState = {
  entities: {},
  complements: {},
  loadedEntities: false,
  loadingEntities: false,
  loadingComplements: false,
  loadedComplements: false,
  searchResults: {}
};

export function MenuReducer(
  state = intialMenuState,
  action: MenuActions
): MenuState {
  switch (action.type) {
    case MenuActionTypes.LoadMenuEntities: {
      return {
        ...state,
        loadingEntities: true
      };
    }
    case MenuActionTypes.LoadMenuEntitiesSuccess: {
      const items = action.payload;
      const entities = items.reduce(
        (entities: { [id: number]: MenuItem }, item: MenuItem) => {
          return {
            ...entities,
            [item._id]: item
          };
        },
        { ...state.entities }
      );

      return {
        ...state,
        entities,
        loadingEntities: false,
        loadedEntities: true
      };
    }
    case MenuActionTypes.LoadMenuEntitiesFail: {
      return {
        ...state,
        loadingEntities: false,
        loadedEntities: false
      };
    }
    case MenuActionTypes.LoadComplements: {
      return {
        ...state,
        loadingComplements: true
      };
    }
    case MenuActionTypes.LoadComplementsSuccess: {
      const items = action.payload;
      const complements = items.reduce(
        (complements: { [id: number]: MenuItem }, item: MenuItem) => {
          return {
            ...complements,
            [item._id]: item
          };
        },
        { ...state.complements }
      );

      return {
        ...state,
        complements,
        loadingComplements: false,
        loadedComplements: true
      };
    }
    case MenuActionTypes.LoadMenuCommplementsFail: {
      return {
        ...state,
        loadedComplements: false,
        loadingComplements: false
      };
    }
    case MenuActionTypes.SearchMenu: {
      return {
        ...state,
        loadingEntities: true
      };
    }
    case MenuActionTypes.SearchMenuSuccess: {
      const items = action.payload;
      const searchResults = items.reduce(
        (res: { [id: number]: MenuItem }, item: MenuItem) => {
          return {
            ...res,
            [item._id]: item
          };
        },
        {}
      );

      return {
        ...state,
        searchResults,
        loadingEntities: false,
        loadedEntities: true
      };
    }
    default:
      return state;
  }
}

export const getMenuEntities = (state: MenuState) => state.entities;
export const getMenuLoadingEntities = (state: MenuState) =>
  state.loadingEntities;
export const getMenuLoadedEntities = (state: MenuState) => state.loadedEntities;
export const getComplements = (state: MenuState) => state.complements;
export const getComplementsLoading = (state: MenuState) =>
  state.loadingComplements;
export const getComplementsLoaded = (state: MenuState) =>
  state.loadedComplements;
export const getSearchResults = (state: MenuState) => state.searchResults;
