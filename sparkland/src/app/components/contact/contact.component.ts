import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as $ from 'jquery';
import { SendRequestService } from 'services/send-request/send-request.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  name: FormGroup;
  sex: FormControl;
  fullname: FormControl;
  email: FormControl;
  location: FormControl;
  message: FormControl;


  sexes: Array<string> = [
    'Mr',
    'Mrs'
  ];

  constructor(private SendRequest: SendRequestService, private formBuilder: FormBuilder) {
  }
  createFormControls() {
    this.sex = new FormControl(null, Validators.required);
    this.fullname = new FormControl(null, Validators.required);
    this.email = new FormControl(null, [Validators.required, Validators.email]);
    this.location = new FormControl(null, [Validators.required]);
    this.message = new FormControl(null, [Validators.required]);
  }

  createForm() {
    this.contactForm = this.formBuilder.group({
      name : new FormGroup({
        sex: this.sex,
        fullname: this.fullname
      }),
      email: this.email,
      location: this.location,
      message: this.message
    });
  }

  sendRequest (
    contactForm
  ) {
    this.name = contactForm.name;
    this.location = contactForm.location;
    this.message = contactForm.message;
    this.email = contactForm.email;

    this.SendRequest.getRequestDetails(this.name, this.email, this.location, this.message);
    return false;
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.createFormControls();
    this.createForm();
  }
}

$(document).ready(function() {
  /*$('select').niceSelect();*/
});
