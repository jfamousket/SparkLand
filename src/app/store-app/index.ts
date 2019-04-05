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

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  shared: SharedState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  shared: SharedReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

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

export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>("router");
export const getSharedState = createFeatureSelector<SharedState>("shared");
