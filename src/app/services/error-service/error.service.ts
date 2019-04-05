import { Injectable } from "@angular/core";
import { DataService } from "services/data-service/data.service";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class ErrorService {
  reportErrorUrl = `${environment.baseUrl}/_error_log.php`;

  constructor(private dataService: DataService) {}

  sendErrorMessage(error) {
    return this.dataService.sendData(this.reportErrorUrl, { error });
  }
}
