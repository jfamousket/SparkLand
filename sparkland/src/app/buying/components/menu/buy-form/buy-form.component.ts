import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { MenuItem } from 'shared/models/menu-item';
import { ItemFormService } from 'services/item-form/item-form.service';

@Component({
  selector: 'buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss'],
})
export class BuyFormComponent implements OnInit{
  @Input('itemList') itemList: Array<MenuItem>;
  complements: Array<MenuItem> = [];
  itemChosen: MenuItem;
  close = false;
  onForm = true;

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

  }
}
