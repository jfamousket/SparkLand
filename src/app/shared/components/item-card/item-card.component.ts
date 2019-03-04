import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'shared/models/menu-item';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input('item') item: MenuItem;
  @Input('category') category: string;

  constructor() {
   }
   ngOnInit() {

   }
}
