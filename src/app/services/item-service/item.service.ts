import { Injectable } from "@angular/core";
import { DataService } from "services/data-service/data.service";
import { environment } from "../../../environments/environment";
import { MenuItem } from "shared/models/menu-item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  getMenu = `${environment.baseUrl}getMenu`;
  getSpecificDataUrl = `${environment.baseUrl}getCategory`;
  getSpecificDataUrlWithID = `${environment.baseUrl}getItem`;

  constructor(private dataService: DataService) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.dataService.getAllData(this.getMenu);
  }
  getSpecificData() {
    return this.dataService.getSpecificData(this.getSpecificDataUrl);
  }
  getSpecificDataWithID(id) {
    return this.dataService.getSpecificDataWithID(
      this.getSpecificDataUrlWithID,
      id
    );
  }
}
