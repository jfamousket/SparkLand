import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';
import { PlateService } from 'services/plate-service/plate.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderId;

  constructor(private dataService: DataService, private plateService: PlateService) { }

  getOrderId() {
    return this.orderId;
  }

  addOrder(customerDetails, orderDetails) {
    let orderId = this.createOrderId(customerDetails);
    let customerId = this.plateService.getPlateId();
    let totalPrice = orderDetails.totalPrice;
    orderDetails.total = totalPrice;

    let order = {
      orderId: orderId,
      orderDetails: orderDetails,
      customerId: customerId,
      customerDetails: customerDetails,
    }     
    return this.dataService.sendData(`${environment.baseUrl}/sales.php`, order);
  }

  private createOrderId(customer) {
    let id = this.plateService.getPlateId();
    let name = customer.name;
    let tel = customer.telephone; 
    let res = customer.residence;
    this.orderId = id + name.slice(0,2) + tel.slice(0,2) + res.slice(0,2);
    return this.orderId;
  }
}
