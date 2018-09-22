import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {
  sendRequestData = `${environment.baseUrl}/spark/api/contact.php`;


  constructor(private dataService: DataService) {
   }

  sendRequest (data) {
    return this.dataService.sendData( this.sendRequestData, data);
  }
}
