import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getAllDataUrl = '/spark/api/_select_all.php';
  getSpecificDataUrl = '/spark/api/_select_category.php';
  getSpecificDataUrlWithID = '/spark/api/_select_one.php';
  
  constructor(private dataService: DataService) {
  }

  getAllData() {
    return this.dataService.getAllData(this.getAllDataUrl);
  }
  getSpecificData() {
    return this.dataService.getSpecificData(this.getSpecificDataUrl);
  }
  getSpecificDataWithID(id) {
    return this.dataService.getSpecificDataWithID(this.getSpecificDataUrlWithID, id);
  }


}
