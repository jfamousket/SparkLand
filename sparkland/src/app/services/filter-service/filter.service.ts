import { Injectable } from '@angular/core';
import { ItemService } from 'services/item-service/item.service';
import { MenuItem } from 'shared/models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  noResult: boolean;
  filteredList: Array<MenuItem>;
  itemList: Array<MenuItem> = [];
  category: string;

  constructor(private itemservice: ItemService) {
      this.itemservice.getAllData()
      .subscribe( resources => this.itemList = this.filteredList = resources );
    }

  filterCategory(category: string): MenuItem[] {
    this.category = category;
    // tslint:disable-next-line:max-line-length // filter by category
    this.filteredList = (category) ? this.itemList.filter(item => item.category.toLowerCase() === category.toLowerCase() ) : this.itemList;
    return this.filteredList;
  }

  get isResult(): boolean {
    // get result and show no result message
    return this.noResult;
  }

  filterSearch(query): MenuItem[] {
    if (!query) {
      // hide no result message after search
      this.noResult = false;
      if (this.category) {/// filter by category after search
        this.filteredList = (this.category) ? this.itemList.filter(item => item.category.toLowerCase() === this.category.toLowerCase() ) : this.itemList;
       return this.filteredList;
      }
      // return list back to normal if there is no search nor category
      this.filteredList = this.itemList;
      return this.filteredList;
    }
    // empty filteredlist befor you start searching
    this.filteredList = [];
    // search by name
    this.itemList.forEach(item => {
      let tags = item.tags.split(',');
      tags.forEach(tag => { if (tag.includes(query)) {
        if (!this.filteredList.includes(item)) this.filteredList.push(item);
        return;
      }
    });
      if (item.it_price.toString().includes(query) && (Number(query) >= 1)) this.filteredList.push(item);
    });
    // show no result message during search
    if (this.filteredList.length === 0) this.noResult = true;
    // always return the filtered list
    return this.filteredList;
  }

}
