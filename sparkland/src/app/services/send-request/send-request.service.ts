import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data.service';


@Injectable({
  providedIn: 'root'
})
export class SendRequestService {

  constructor(private dataService: DataService) {
   }

  getRequestDetails (name, email, location, message) {
    // send details to server
  }
}
