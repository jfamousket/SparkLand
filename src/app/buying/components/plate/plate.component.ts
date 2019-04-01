import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { PlateState } from "../../store/reducers/plate/plate.reducer";
import { Observable } from "rxjs";
import {
  getPlateItems,
  getPlateState
} from "../../store/selectors/plate.selectors";
import { MenuItem } from "shared/models/menu-item";

@Component({
  selector: "app-plate",
  templateUrl: "./plate.component.html",
  styleUrls: ["./plate.component.scss"]
})
export class PlateComponent implements OnInit {
  plateDetails$: Observable<{}>;
  plateItems$: Observable<MenuItem[]>;

  constructor(private store: Store<PlateState>) {}

  ngOnInit() {
    this.plateItems$ = this.store.pipe(select(getPlateItems));
    this.plateDetails$ = this.store.pipe(select(getPlateState));
  }

  getPlate() {}

  clearPlate() {}
}
