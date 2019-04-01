import { Component, Input, Output, EventEmitter } from "@angular/core";
import { MenuItem } from "shared/models/menu-item";

@Component({
  selector: "item-qty",
  templateUrl: "./item-qty.component.html",
  styleUrls: ["./item-qty.component.scss"]
})
export class ItemQtyComponent {
  @Input("item") item: MenuItem;
  @Input("fromPlate") fromPlate: boolean;
  @Output() addItemQty = new EventEmitter<MenuItem>();
  @Output() reduceItemQty = new EventEmitter<MenuItem>();
  @Input("itemQty") itemQty: number;

  constructor() {}
  addQty() {
    this.addItemQty.emit(this.item);
  }
  reduceQty() {
    this.reduceItemQty.emit(this.item);
  }
}
