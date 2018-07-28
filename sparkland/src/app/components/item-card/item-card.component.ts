import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu-item';
import { PlateService } from '../../services/plate-service/plate.service';
import { Plate } from '../../shared/plate';
import { ItemFormService } from '../../services/item-form/item-form.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input('item') item: MenuItem;
  @Input('category') category: string;
  plate;
  itemChosen: MenuItem;

  constructor( private plateService: PlateService, private itemFormService: ItemFormService) {
   }
   ngOnInit() {
    this.itemFormService.itemChosen.subscribe(item => this.itemChosen = item);
 
  }
   showComplements(item: MenuItem) {
    this.itemFormService.changeItem(item);
  }
  addToPlate() {
    this.plateService.addToPlate(this.item);
  }
  getqty(){
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(plate => this.plate = plate.getQuantity(this.item));
    return this.plate;
  }
}
