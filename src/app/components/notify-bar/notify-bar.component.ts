import { Component, OnInit, ElementRef } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { SharedState } from "src/app/store-app/shared.reducer";
import { Observable } from "rxjs";
import { getNotification } from "src/app/store-app/shared.selectors";
import { UnNotify } from "src/app/store-app/shared.actions";

@Component({
  selector: "notify-bar",
  templateUrl: "./notify-bar.component.html",
  styleUrls: ["./notify-bar.component.scss"]
})
export class NotifyBarComponent implements OnInit {
  notification$: Observable<any>;

  constructor(private element: ElementRef, private store: Store<SharedState>) {}

  ngOnInit() {
    this.notification$ = this.store.pipe(select(getNotification));
    window.addEventListener("click", this.showNotify.bind(this));
    window.setTimeout(() => {
      this.closeNotify();
    }, 5000);
  }

  private showNotify(e: Event) {
    if (
      !this.element.nativeElement.contains(e.target) ||
      (e.target instanceof HTMLElement &&
        e.target.classList.contains("dark-bg"))
    ) {
      window.removeEventListener("click", this.showNotify);
    }
  }

  closeNotify() {
    this.store.dispatch(new UnNotify());
    window.removeEventListener("click", this.showNotify.bind(this));
  }
}
