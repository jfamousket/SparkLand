import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import {
  checkStart,
  checkNum,
  checkBadWords,
  checkWordStart
} from "shared/validation";

import * as $ from "jquery";
import { Subscription, Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { SharedState } from "src/app/store-app/shared.reducer";
import { SendContact } from "src/app/store-app/shared.actions";
import { getNotification } from "src/app/store-app/shared.selectors";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  name: FormGroup;
  sex: FormControl;
  fullname: FormControl;
  number: FormControl;
  email: FormControl;
  location: FormControl;
  message: FormControl;
  notification$: Observable<string>;

  sexes: Array<string> = ["Mr", "Mrs"];
  subscription: Subscription;

  constructor(
    private store: Store<SharedState>,
    private formBuilder: FormBuilder
  ) {}
  createFormControls() {
    this.sex = new FormControl("", Validators.required);
    this.fullname = new FormControl("", [
      Validators.required,
      checkWordStart,
      checkBadWords
    ]);
    this.email = new FormControl("", [Validators.required, Validators.email]);
    this.number = new FormControl("", [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(9),
      checkStart,
      checkNum
    ]);
    this.location = new FormControl("", [Validators.required]);
    this.message = new FormControl("", [Validators.required]);
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.createFormControls();
    this.createForm();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  sendContact() {
    this.store.dispatch(new SendContact(this.contactForm.value));
    this.notification$ = this.store.pipe(select(getNotification));
  }

  private createForm() {
    this.contactForm = this.formBuilder.group({
      name: new FormGroup({
        sex: this.sex,
        fullname: this.fullname
      }),
      email: this.email,
      number: this.number,
      location: this.location,
      message: this.message
    });
  }
  private clearForm() {
    this.contactForm.reset({
      name: {
        sex: "",
        fullname: ""
      },
      email: "",
      number: "",
      location: "",
      message: ""
    });
  }
}
