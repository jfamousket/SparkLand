import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor() { }
  ngOnInit() {
  }

}
$(document).ready(() => {
 /* $('.fadeGallery').each(() => {
    const controller1 = new ScrollMagic.Controller();

    const fadeInDwn = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .5,
      duration: '100%',
      reverse: false
    })
    .setClassToggle(this, 'animFadeInDown')
    .addIndicators({
      name: 'fadeGallery',
    })
    .addTo(controller1);
    console.log(this);
  });*/
});


