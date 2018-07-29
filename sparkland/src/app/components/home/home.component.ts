import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slide = '.owl-carousel';

  constructor() { }

  ngOnInit() {
  }

}

$(document).ready(() => {

});

