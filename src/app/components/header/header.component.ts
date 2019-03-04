import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
import { PlateService } from 'services/plate-service/plate.service';
import { Observable } from 'rxjs';
import { Plate } from 'shared/models/plate';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  count;

  constructor(private router: Router, private plateService: PlateService) {

    }

  ngOnInit() {
    this.plateCount();
    this.router.events.subscribe(( _: NavigationEnd ) => this.currentUrl = _.url);
  }

  plateCount() {
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(plate => this.count = plate.totalItemsCount);
    return this.count;
  }
}

$(document).ready(() => {
  $('.small-menu-icon , .main-navigation, .overlay').on('click', () => {
    $('.overlay').toggleClass('d-block');
    $('.small-menu-icon').toggleClass('animate-icon');
    $('.navbar').toggleClass('navbar-open');
  });

  
  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 60) $('.scroll-header').css({'top': '0px', 'opacity': '1'});
    else  $('.scroll-header').css({'top': '-100px', 'opacity': '0'});
  });

});
