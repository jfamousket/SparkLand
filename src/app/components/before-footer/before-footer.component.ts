import { Component, OnInit } from '@angular/core';
// import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-before-footer',
  templateUrl: './before-footer.component.html',
  styleUrls: ['./before-footer.component.scss']
})
export class BeforeFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $('.contact').each(function() {
    //   const controller = new ScrollMagic.Controller();
    //   const scene = new ScrollMagic.Scene({
    //     triggerElement: this,
    //     triggerHook: 0,
    //     reverse: true
    //   })
    //   .setClassToggle(this, 'animFadeDown')
    //   .addIndicators()
    //   .addToController(controller);
    // });
  }

}
