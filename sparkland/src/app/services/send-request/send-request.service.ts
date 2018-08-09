import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {
  sendRequestData = '/spark/api/contact.php';


  constructor(private dataService: DataService) {
   }

  sendRequest (data) {
    return this.dataService.sendData( this.sendRequestData, data);
  }
}
