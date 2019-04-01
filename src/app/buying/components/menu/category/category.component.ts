import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { getCategories } from "src/app/buying/store/selectors/menu.selectors";
import { MenuState } from "src/app/buying/store/reducers/menu/menu-reducer.reducer";

@Component({
  selector: "category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  @Input("category") category;

  categoryList$: Observable<string[]>;

  constructor(private store: Store<MenuState>) {}

  ngOnInit() {
    this.categoryList$ = this.store.pipe(select(getCategories));
  }
}
$(document).ready(function() {
  $(".card").click(() => {
    $("#menu").scrollTop(0);
  });
});
