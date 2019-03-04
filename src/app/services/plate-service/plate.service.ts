import { Injectable } from '@angular/core';
import { MenuItem } from 'shared/models/menu-item';
import { DataService } from 'services/data-service/data.service';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { PlateItem } from 'shared/models/plate-item';
import { Observable } from 'rxjs';
import { Plate } from 'shared/models/plate';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  private itemExist: boolean;

  constructor (http: Http, private dataService: DataService) {
   }

   getPlateId() {
     return this.createPlateID();
   }
  
  getPlate() {
     return new Observable((observer) => {
      observer.next( JSON.parse(localStorage.getItem('plate')))
    }).pipe(catchError(this.dataService.handleError));
  }

   addToPlate(item: MenuItem) {
    let plateItem = this.createPlateItem(item);
    let plate = JSON.parse(localStorage.getItem('plate'));

    if(this.checkEmptyPlate(plate)) return this.createPlate(plateItem);

    plate = JSON.parse(localStorage.getItem('plate'));
    this.updateItemQuantity(item, plate, 1);

    if(this.itemExist) return this.dontAddItem(plate);

    plate.push(plateItem);
    return localStorage.setItem('plate', JSON.stringify(plate));
  }

  removeFromPlate(item: MenuItem) {
    let plate = JSON.parse(localStorage.getItem('plate'));
    plate = this.updateItemQuantity(item, plate, -1);

    if(this.checkEmptyPlate(plate)) return localStorage.removeItem('plate');

    return localStorage.setItem('plate', JSON.stringify(plate));
  }

  clearPlate() {
    localStorage.removeItem('plate');
    localStorage.setItem('plateID', String(this.genRandomId()));
  }

  private dontAddItem(plate) {
    this.itemExist = false;
    return localStorage.setItem('plate', JSON.stringify(plate));
  }

  private createPlate(item?) {
    if(!item) return localStorage.setItem('plate', ' ');

    let plate = [];
    plate.push(item);
    return  localStorage.setItem('plate', JSON.stringify(plate));

  }

  private checkEmptyPlate(plate): boolean {
    if(!plate) return true;
    if(!plate.length) return true;
    return false;
  }

  private genRandomId() :number {
    return Math.floor((Math.random() * 1000) + 1);
  }

  private createPlateID(): number {
    let randomID = this.genRandomId();
    localStorage.setItem('plateID' , String(randomID));
    return randomID;
  }

  private createPlateItem(item: MenuItem): PlateItem {
    let plateItem = new PlateItem();
      plateItem._id = item._id,
      plateItem.it_name = item.it_name,
      plateItem.it_price = item.it_price,
      plateItem.qty = 1
    return plateItem;
  }


  private updateItemQuantity(item: MenuItem, plate: PlateItem[], change: number) {
    let  plateItem, index;
    plate.forEach((pItem,i) => {
      if(pItem._id === item._id) {
        plateItem = pItem;
        plateItem.qty_in_stock = item.qty_in_stock;
        index = i;
        this.itemExist = true;
    }});

    if(!plateItem) return plate;

    if(plateItem.qty >= item.qty_in_stock && change === +1){
      swal("Sorry!! We have only " + plateItem.qty + " " + item.it_name + " left in stock");
      return plate;
    } 

    plateItem.qty = plateItem.qty + change;
    if(plateItem.qty < 1) {
      this.itemExist = false;
      plate.splice(index, 1);
    }

    return plate;
  }

}
