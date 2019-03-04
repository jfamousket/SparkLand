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
    let comps_name = item.comp_id
    comps_name.forEach(name => {
      this.itemService.getSpecificDataWithID(name).subscribe(comp => { 
        if(comp.message) return;
        complements.push(comp)
    });
    });
    return complements;
  }
}
