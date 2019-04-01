import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { Params, RouterStateSnapshot } from "@angular/router";
import {
  RouterStateSerializer,
  routerReducer,
  RouterReducerState
} from "@ngrx/router-store";

import { environment } from "../../../environments/environment";

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
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
