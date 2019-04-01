import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { MenuItem } from "shared/models/menu-item";
import { MenuState } from "src/app/buying/store/reducers/menu/menu-reducer.reducer";
import { getMenuItems } from "src/app/buying/store/selectors/menu.selectors";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FilterService {
  noResult: boolean;
  filteredList: Array<MenuItem>;
  itemList: Array<MenuItem> = [];
  category: string;

  constructor(private store: Store<MenuState>) {
    this.store
      .pipe(select(getMenuItems))
      .subscribe(items => (this.itemList = items));
  }

  get isResult(): boolean {
    // get result and show no result message
    return this.noResult;
  }

  filterSearch(query): Observable<MenuItem[]> {
    if (!query) {
      // hide no result message after search
      this.noResult = false;
      if (this.category) {
        // filter by category after search
        this.filteredList = this.category
          ? this.itemList.filter(
              item =>
                item.category.toLowerCase() === this.category.toLowerCase()
            )
          : this.itemList;
        return of(this.filteredList);
      }
      // return list back to normal if there is no search nor category
      this.filteredList = this.itemList;
      return of(this.filteredList);
    }
    // empty filteredlist before you start searching
    this.filteredList = [];
    // search by name
    this.itemList.forEach(item => {
      let tags = item.tags;
      tags.forEach(tag => {
        if (tag.includes(query)) {
          if (!this.filteredList.includes(item)) this.filteredList.push(item);
          return;
        }
      });
      if (item.it_price.toString().includes(query) && Number(query) >= 1)
        this.filteredList.push(item);
    });
    // show no result message during search
    if (this.filteredList.length === 0) this.noResult = true;
    // always return the filtered list
    return of(this.filteredList);
  }
}
