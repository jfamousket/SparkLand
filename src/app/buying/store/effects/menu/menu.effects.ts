import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ItemService } from "services/item-service/item.service";
import { of } from "rxjs";
import {
  LoadMenuEntitiesFail,
  MenuActionTypes,
  SearchMenu
} from "../../actions/menu.actions";
import { FilterService } from "services/filter-service/filter.service";

@Injectable()
export class MenuEffects {
  @Effect()
  loadMenuEntities$ = this.actions$.pipe(
    ofType(MenuActionTypes.LoadMenuEntities),
    mergeMap(() =>
      this.itemService.getMenuItems().pipe(
        map(items => ({
          type: MenuActionTypes.LoadMenuEntitiesSuccess,
          payload: items
        })),
        catchError(error => of(new LoadMenuEntitiesFail({ error })))
      )
    )
  );

  @Effect()
  searchMenuEntities$ = this.actions$.pipe(
    ofType(MenuActionTypes.SearchMenu),
    map((action: SearchMenu) => action.payload),
    mergeMap(query =>
      this.filterService.filterSearch(query).pipe(
        map(items => ({
          type: MenuActionTypes.SearchMenuSuccess,
          payload: items
        })),
        catchError(error => of(new LoadMenuEntitiesFail({ error })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService,
    private filterService: FilterService
  ) {}
}
