import { Injectable } from "@angular/core";
import { DataService } from "services/data-service/data.service";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlateService {
  constructor(private dataService: DataService) {}

  getPlateId() {
    return this.createPlateID();
  }
  getPlate() {
    return new Observable(observer => {
      observer.next(JSON.parse(localStorage.getItem("plate")));
    }).pipe(catchError(this.dataService.handleError));
  }
  clearPlate() {
    localStorage.removeItem("plate");
    localStorage.setItem("plateID", String(this.genRandomId()));
  }

  private genRandomId(): number {
    return Math.floor(Math.random() * 1000 + 1);
  }

  private createPlateID(): number {
    let randomID = this.genRandomId();
    localStorage.setItem("plateID", String(randomID));
    return randomID;
  }
}
