import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'shared/models/menu-item';
import { ItemService } from 'services/item-service/item.service';

@Injectable({
  providedIn: 'root'
})
export class ItemFormService {

  private itemClicked = new BehaviorSubject<MenuItem>(null);
  showForm = false;

  itemChosen = this.itemClicked.asObservable();
  constructor(private itemService: ItemService) { }

  changeItem(item: MenuItem) {
    this.itemClicked.next(item);
  }

  getComplements(item): MenuItem[] {
    let complements: MenuItem[] = [];
    let comps_id = item.comp_id.split(',');
    comps_id.forEach(id => {
      this.itemService.getSpecificDataWithID(id).subscribe(comp => { 
        if(comp.message) return;
        complements.push(comp[0])
    });
    });
    return complements;
  }
}
