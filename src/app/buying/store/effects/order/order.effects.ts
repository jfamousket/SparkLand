import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { OrderActionTypes, PlaceOrder } from "../../actions/order.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { OrderService } from "services/order-service/order.service";
import { of } from "rxjs";

@Injectable()
export class OrderEffects {
  @Effect()
  placeOrder$ = this.actions$.pipe(
    ofType(OrderActionTypes.PlaceOrder),
    map((action: PlaceOrder) => action.payload),
    mergeMap(order =>
      this.orderService.addOrder(order.cust, order.items).pipe(
        map(order => ({
          type: OrderActionTypes.PlaceOrderSuccess,
          payload: order
        })),
        catchError(err =>
          of({
            type: OrderActionTypes.PlaceOrderFailure,
            payload: err
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private orderService: OrderService) {}
}
