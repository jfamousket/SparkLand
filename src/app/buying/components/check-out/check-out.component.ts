import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  checkNum,
  checkStart,
  checkBadWords,
  checkWordStart
} from "shared/validation";
import { Store } from "@ngrx/store";
import { PlateState } from "../../store/reducers/plate/plate.reducer";
import { PlaceOrder } from "../../store/actions/order.actions";

@Component({
  selector: "check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.scss"]
})
export class CheckOutComponent implements OnInit {
  checkOut: FormGroup;
  name = new FormControl("", [
    Validators.required,
    checkBadWords,
    checkWordStart
  ]);
  telephone = new FormControl("", [
    Validators.required,
    Validators.minLength(9),
    Validators.maxLength(9),
    checkStart,
    checkNum
  ]);
  residence = new FormControl("", [Validators.required, checkWordStart]);
  @Input() plate: { any };
  success: string;
  orderId: string;
  error: string;

  constructor(private store: Store<PlateState>) {}

  ngOnInit() {
    $(window).scrollTop(0);
    this.createForm();
  }

  placeOrder(cust, items) {
    this.store.dispatch(new PlaceOrder({ cust, items }));
  }

  private createForm() {
    this.checkOut = new FormGroup({
      name: this.name,
      telephone: this.telephone,
      residence: this.residence
    });
  }
}
