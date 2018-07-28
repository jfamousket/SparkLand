import { Component, Input } from '@angular/core';
import { MenuItem } from '../../shared/menu-item';
import { PlateService } from '../../services/plate-service/plate.service';
import { Subscription } from 'rxjs';
import { Plate } from '../../shared/plate';
import { map } from 'rxjs/operators';

@Component({
  selector: 'item-qty',
  templateUrl: './item-qty.component.html',
  styleUrls: ['./item-qty.component.scss']
})
export class ItemQtyComponent {
  @Input('item') item: MenuItem;
  qty: number;
  
  itemChosen: MenuItem;
  subscription: Subscription;
  constructor(private plateService: PlateService) {
  }
  addToPlate() {
    this.plateService.addToPlate(this.item);
  }

  removeFromPlate() {
    this.plateService.removeFromPlate(this.item);
  }

  getQuantity(){
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(res => this.qty = res.getQuantity(this.item));
    if(!this.qty) return 0;
    return this.qty;
  }

}
