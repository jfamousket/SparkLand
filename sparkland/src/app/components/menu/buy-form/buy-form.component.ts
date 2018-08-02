import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MenuItem } from 'models/shared/menu-item';
import { ItemFormService } from 'services/item-form/item-form.service';

@Component({
  selector: 'buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss'],
})
export class BuyFormComponent implements OnInit {
  complements: Array<MenuItem>;
  itemChosen: MenuItem;
  close = false;

  constructor(private itemFormService: ItemFormService) {
    this.itemFormService.itemChosen.subscribe(item => {
      this.itemChosen = item;
      if(item){
        this.complements = this.itemFormService.getComplements(item);
        if(!this.close) $('.comp-list').css({'bottom': '0'});
      } 
    });
  }
  
  neverShow() {
    this.close = true;
  }

  closeForm() {
    $('.comp-list').css({'bottom': '-500px'});
  }

  ngOnInit() {
    $(window).scrollTop(0);
  }
}
