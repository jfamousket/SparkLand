import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlateService } from 'services/plate-service/plate.service';
import { map, switchMap } from 'rxjs/operators';
import { Plate } from 'shared/models/plate';
import { Subscription, throwError } from 'rxjs';
import { DataService } from 'services/data-service/data.service';
import { OrderService } from 'services/order-service/order.service';
import { checkNum, checkStart, checkBadWords, checkWordStart } from 'shared/validation';
import { AppError, MenuError } from 'shared/models/app-error';
import { NotFoundError } from 'shared/models/not-found';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  checkOut: FormGroup;
  name = new FormControl('', [Validators.required, checkBadWords, checkWordStart]);
  telephone = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), checkStart, checkNum ]);
  residence = new FormControl('', [Validators.required, checkWordStart]);
  plate: Plate;
  orderSubscription: Subscription;
  customerSubscription: Subscription;
  success: string;
  orderId: string;
  error: string;

  constructor(private plateService: PlateService, private dataService: DataService, private orderService: OrderService) {
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.createForm();
  }
  getPlate() {
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(plate => this.plate = plate);
    return this.plate.items;
  }
  placeOrder() {

    this.orderSubscription = this.orderService.addOrder(this.checkOut.value, this.plate)
    .subscribe(res => {
      this.success = res.json();
      this.plateService.clearPlate();
      this.orderId = this.orderService.getOrderId();
    }, 
    (error: AppError) => {
      console.log('errro');
      if(error instanceof NotFoundError) {
        error.message = "Couldn't place order, Looks like networks is down try again";
        return this.error = error.message;
      }
        else return throwError(new MenuError(error, window.location));
    });
  }

  ngOnDestroy() {
    if(this.orderSubscription && this.customerSubscription) {
      this.orderSubscription.unsubscribe();
      this.customerSubscription.unsubscribe();
    }
  }

  private createForm() {
    this.checkOut = new FormGroup({
      name : this.name,
      telephone: this.telephone,
      residence: this.residence,
    });
  }



}
