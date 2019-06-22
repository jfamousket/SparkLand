import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  SharedActionTypes,
  SendContact,
  SendContactFailure
} from "./shared.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { DataService } from "services/data-service/data.service";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable()
export class SharedEffects {
  @Effect()
  sendContact$ = this.actions$.pipe(
    ofType(SharedActionTypes.SendContact),
    map((action: SendContact) => action.payload),
    mergeMap(payload =>
      this.dataService.sendData(`${environment.baseUrl}contact`, payload).pipe(
        map(res => ({
          type: SharedActionTypes.SendContactSuccess,
          payload: "Done"
        })),
        catchError(err => of(new SendContactFailure("error")))
      )
    )
  );
  constructor(private actions$: Actions, private dataService: DataService) {}
}
