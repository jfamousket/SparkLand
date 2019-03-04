import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getAllDataUrl = `${environment.baseUrl}getMenu`;
  getSpecificDataUrl = `${environment.baseUrl}getCategory`;
  getSpecificDataUrlWithID = `${environment.baseUrl}getItem`;
  
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
