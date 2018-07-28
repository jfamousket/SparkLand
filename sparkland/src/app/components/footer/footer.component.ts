
import { Component, OnInit } from '@angular/core';
// import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
import * as $ from 'jquery';
import { TimelineMax, Power0 } from 'gsap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date: number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
    // const controller = new ScrollMagic.Controller();
    // const fadeSceneTl = new TimelineMax();
    // fadeSceneTl
    // .from('footer', 1, {autoAlpha: 0, ease: Power0.easeNone});

    // const fadeInScene = new ScrollMagic.Scene({
    //   triggerElement: '#footerFade',
    //   triggerHook: 1,
    //   duration: '100%'
    // })
    // .setTween(fadeSceneTl)
    // .addTo(controller);
  }

}
