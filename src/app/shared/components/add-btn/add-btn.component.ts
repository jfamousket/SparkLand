import { Component, OnInit, Input } from "@angular/core";
import { PlateState } from "src/app/buying/store/reducers/plate/plate.reducer";
import { Store, select } from "@ngrx/store";
import {
  AddItem,
  AddItemQuantity,
  ReduceItemQuantity
} from "src/app/buying/store/actions/plate.actions";
import { getItemQty } from "src/app/buying/store/selectors/plate.selectors";
import { Observable } from "rxjs";

@Component({
  selector: "add-btn",
  templateUrl: "./add-btn.component.html",
  styleUrls: ["./add-btn.component.scss"]
})
export class AddBtnComponent implements OnInit {
  @Input("item") item;
  @Input("onForm") onForm;
  @Input() fromPlate: boolean;
  itemQty$: Observable<number>;

  constructor(private store: Store<PlateState>) {}

  addToPlate(item = this.item) {
    this.store.dispatch(new AddItem(item));
  }
  reduceItemQty(item = this.item) {
    this.store.dispatch(new ReduceItemQuantity(item));
  }
  addItemQty(item = this.item) {
    this.store.dispatch(new AddItemQuantity(item));
  }
  ngOnInit() {
    this.itemQty$ = this.store.pipe(select(getItemQty(this.item)));
  }
  showComplements() {}
}
