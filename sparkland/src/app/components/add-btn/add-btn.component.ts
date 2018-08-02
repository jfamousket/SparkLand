import { Component, OnInit, Input } from '@angular/core';
import { PlateService } from 'services/plate-service/plate.service';
import { Plate } from 'models/shared/plate';
import { map } from 'rxjs/operators';
import { ItemFormService } from 'services/item-form/item-form.service';
import { MenuItem } from 'models/shared/menu-item';

@Component({
  selector: 'add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {
  @Input('item') item;
  itemChosen: MenuItem;
  plate;
  
  constructor(private plateService: PlateService, private itemFormService: ItemFormService) { }

  addToPlate() {
    this.plateService.addToPlate(this.item);
  }
  getqty(){
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(plate => this.plate = plate.getQuantity(this.item));
    return this.plate;
  }
  ngOnInit() {
    this.itemFormService.itemChosen.subscribe(item => this.itemChosen = item);
 
  }
   showComplements(item: MenuItem) {
    this.itemFormService.changeItem(item);
  }

}
