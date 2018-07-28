import { Component, OnInit } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';
// import { TweenMax } from 'gsap';
// import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
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
    // $('.service, .team').each(function () {
    //   const controller = new ScrollMagic.Controller();

    //   const fadeInDown = new ScrollMagic.Scene({
    //     triggerElement: this,
    //     triggerHook: 0.85,
    //     reverse: true
    //   })
    //   .setClassToggle(this, 'animFadeInDown')
    //   .addIndicators({
    //     name: 'fadeScene',
    //     colorTrigger: 'black',
    //     colorStart: '#75c695'
    //   })
    //   .addTo(controller);
    // });
  }

}

$(document).ready(() => {

});

