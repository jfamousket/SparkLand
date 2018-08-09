import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mySwiper = new Swiper('.owl', {

  })

  constructor() { }

  ngOnInit() {
  }

  
}

$(document).ready(function () {

});
