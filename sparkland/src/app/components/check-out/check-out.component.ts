import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlateService } from '../../services/plate-service/plate.service';
import { map, switchMap, filter } from 'rxjs/operators';
import { Plate } from '../../shared/plate';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  checkOut: FormGroup;
  name = new FormControl();
  telephone = new FormControl();
  residence = new FormControl();
  plate: Plate;
  subscription: Subscription;
  orderId: string;

  constructor(private plateService: PlateService, private dataService: DataService) {
  }

  ngOnInit() {
    $(window).scrollTop(0);
    this.createForm();
    this.plateService.getPlate().pipe(map(x => new Plate(x))).subscribe(plate => this.plate = plate);
  }
  placeOrder() {
    console.log(this.createOrderId());
      // let order = {
      //   id: this.plateService.getPlateId(),
      //   userDetails: this.checkOut,
      //   items: this.plate,
      // } 
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  private createForm() {
    this.checkOut = new FormGroup({
      name : this.name,
      telephone: this.telephone,
      residence: this.residence,
    });
  }


  private createOrderId() {
    let id = this.plateService.getPlateId();
    let name = this.name.value;
    let tel = this.telephone.value; 
    let res = this.residence.value
    return id + name.slice(0,2) + tel.slice(0,2) + res.slice(0,2);
  }
}
