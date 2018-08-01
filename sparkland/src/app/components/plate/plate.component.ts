import { Component, OnInit } from '@angular/core';
import { PlateService } from 'services/plate-service/plate.service';
import { map } from 'rxjs/operators';
import { Plate } from 'shared/models/plate';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit {
  plate: Plate;

  constructor(private plateService: PlateService) { }

  ngOnInit() {
    $(window).scrollTop(0);
    this.getPlate();
  }

  getPlate() {
    this.plateService.getPlate()
    .pipe(map(x => new Plate(x)))
    .subscribe(plate => this.plate = plate );
    return this.plate;
  }

  clearPlate() {
    this.plateService.clearPlate();
  }

}
