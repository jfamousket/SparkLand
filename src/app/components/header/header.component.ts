import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import * as $ from "jquery";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { PlateState } from "src/app/buying/store/reducers/plate/plate.reducer";
import { getNumberOfItems } from "src/app/buying/store/selectors/plate.selectors";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  count$: Observable<number>;

  constructor(private router: Router, private store: Store<PlateState>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(getNumberOfItems));
    this.router.events.subscribe(
      (_: NavigationEnd) => (this.currentUrl = _.url)
    );
  }
}

$(document).ready(() => {
  $(".small-menu-icon , .main-navigation, .overlay").on("click", () => {
    $(".overlay").toggleClass("d-block");
    $(".small-menu-icon").toggleClass("animate-icon");
    $(".navbar").toggleClass("navbar-open");
  });

  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 60)
      $(".scroll-header").css({ top: "0px", opacity: "1" });
    else $(".scroll-header").css({ top: "-100px", opacity: "0" });
  });
});
