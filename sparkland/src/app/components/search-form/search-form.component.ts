import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FilterService } from 'services/filter-service/filter.service';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() searching = new EventEmitter();
  @Input('items') items;
  
  constructor(private filterService: FilterService) { 
  }

  ngOnInit() {
  }

  search(query) {
    let filteredList = this.items;
    filteredList = this.filterService.filterSearch(query);
    const noResult = this.filterService.isResult;
    this.searching.emit({filteredList: filteredList, noResult: noResult, query: query});
  }

}
