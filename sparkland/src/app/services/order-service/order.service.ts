import { Injectable } from '@angular/core';
import { DataService } from 'services/data-service/data.service';
import { PlateService } from 'services/plate-service/plate.service';

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

    
    let order = {
      orderId: orderId,
      customerId: customerId,
      orderDetails: orderDetails,
    } 
    return this.dataService.sendData('/spark/api/sales.php', order);
  }

  addCustomer(customerDetails) {
    let customerId = this.plateService.getPlateId();

    let customer = {
      customerId: customerId,
      customerDetails: customerDetails
    }
    return this.dataService.sendData('/spark/api/addCustomer.php', customer );
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
