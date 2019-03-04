import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {
  sendRequestData = `${environment.baseUrl}contact`;


  constructor(private dataService: DataService) {
   }

  sendRequest (data) {
    return this.dataService.sendData( this.sendRequestData, data);
  }
}
