import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { Params, RouterStateSnapshot } from "@angular/router";
import {
  RouterStateSerializer,
  routerReducer,
  RouterReducerState
} from "@ngrx/router-store";

import { environment } from "../../environments/environment";
import { SharedState, SharedReducer } from "./shared.reducer";
import { BuyingState, BuyingReducers } from "../buying/store";

// main app state
export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  shared: SharedState;
}

// main app reducers
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  shared: SharedReducer
};

// meta reducers with development tool `storefreeze`
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];

// interface for our router's state
export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

// serializer to return our router state according to interface above
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot) {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    return { params, url, queryParams };
  }
}

// state selectors
export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("router");
export const getSharedState = createFeatureSelector<SharedState>("shared");
