import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  PlateActionTypes,
  AddItem,
  UpdatePlateSuccess,
  UpdatePlateError,
  RemoveItem
} from "../../actions/plate.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { MenuItem } from "shared/models/menu-item";
import { PlateService } from "services/plate-service/plate.service";
import { of } from "rxjs";

@Injectable()
export class PlateEffects {
  // @Effect()
  // addItem$ = this.actions$.pipe(
  //   ofType(PlateActionTypes.AddItem),
  //   map((action: AddItem) => action.payload),
  //   mergeMap(item =>
  //     this.plateService.addToOrUpdatePlate(item).pipe(
  //       map(plate => ({
  //         type: PlateActionTypes.UpdatePlateSuccess,
  //         payload: plate
  //       })),
  //       catchError(err => of(new UpdatePlateError(err)))
  //     )
  //   )
  // );

  // @Effect()
  // remove$ = this.actions$.pipe(
  //   ofType(PlateActionTypes.RemoveItem),
  //   map((action: RemoveItem) => action.payload),
  //   mergeMap(item =>
  //     this.plateService.removeFromPlate(item).pipe(
  //       map(plate => ({
  //         type: PlateActionTypes.UpdatePlateSuccess,
  //         payload: plate
  //       })),
  //       catchError(err => of(new UpdatePlateError(err)))
  //     )
  //   )
  // );

  constructor(private actions$: Actions, private plateService: PlateService) {}
}
