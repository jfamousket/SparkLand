import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuItem } from "shared/models/menu-item";
import { ActivatedRoute } from "@angular/router";
import { FilterService } from "services/filter-service/filter.service";
import { Store, select } from "@ngrx/store";
import {
  MenuState,
  getSearchResults
} from "../../store/reducers/menu/menu-reducer.reducer";
import { Observable } from "rxjs";
import {
  getSearchItems,
  categoryFilter,
  getMenuItems
} from "../../store/selectors/menu.selectors";
import { LoadMenuEntities, SearchMenu } from "../../store/actions/menu.actions";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  noResult = false;
  category: string;
  itemList$: Observable<MenuItem[]>;
  searchValue: string = "";

  constructor(private store: Store<MenuState>) {}

  search(eventArgs) {
    if (eventArgs) {
      this.noResult = eventArgs.noResult;
      this.store.dispatch(new SearchMenu(eventArgs.query));
      this.itemList$ = this.store.pipe(select(getSearchItems));
    }
  }
  filterByCategory() {
    this.itemList$ = this.store.pipe(select(categoryFilter));
  }

  getAllItems() {
    this.store.dispatch(new LoadMenuEntities());
    this.itemList$ = this.store.pipe(select(getMenuItems));
  }

  ngOnInit() {
    this.getAllItems();
    this.filterByCategory();
    $("#category").click(() => {
      this.scrollWindow();
    });
  }

  private scrollWindow() {
    let y =
      window.innerWidth < 900 && window.innerWidth > 500
        ? 300
        : window.innerWidth <= 500
        ? 400
        : 650;
    $("#menu").animate(
      {
        scrollTop: scrollTo(0, y)
      },
      500
    );
  }
}
