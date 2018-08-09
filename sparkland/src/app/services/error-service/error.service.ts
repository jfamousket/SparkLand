import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  reportErrorUrl = '/spark/api/_error_log.php';

  constructor(private dataService: DataService) {

    }

    sendErrorMessage(error) {
      return this.dataService.sendData( this.reportErrorUrl, {error});
    }



}
