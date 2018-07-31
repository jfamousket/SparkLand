import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'plate-summary',
  templateUrl: './plate-summary.component.html',
  styleUrls: ['./plate-summary.component.scss']
})
export class PlateSummaryComponent implements OnInit {
  @Input('plate') plate;
  constructor() { }

  ngOnInit() {
  }

}
