import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {checkStart, checkNum, checkBadWords, checkWordStart } from 'shared/validation';

import * as $ from 'jquery';
import { SendRequestService } from 'services/send-request/send-request.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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
  success: string;
  failure: string;
  notify: boolean;

  sexes: Array<string> = [
    'Mr',
    'Mrs'
  ];
  subscription: Subscription;

  constructor(private SendRequest: SendRequestService, private formBuilder: FormBuilder) {
  }
  createFormControls() {
    this.sex = new FormControl('', Validators.required);
    this.fullname = new FormControl('', [Validators.required, checkWordStart, checkBadWords]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.number = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), checkStart, checkNum ]);
    this.location = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.createFormControls();
    this.createForm();
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  sendContact () {
    this.notify = true
    this.subscription =  this.SendRequest.sendRequest(this.contactForm.value)
    .subscribe(res => {
      this.clearForm();
      this.success = `We will get back to you, ${res.json().name.fullname}, as soon as possible `
    }, (error) => {
      if(!error.timeout) return this.failure = 'An error occured please try again';
      return this.failure = "Our server timed out, check connection and try again"
    });
  }  

  private createForm() {
    this.contactForm = this.formBuilder.group({
      name : new FormGroup({
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
          sex: '',
          fullname: '',
        },
        email: '',
        number: '',
        location: '',
        message: ''
      });

  }

}
