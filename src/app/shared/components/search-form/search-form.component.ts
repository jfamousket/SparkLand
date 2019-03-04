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
  performSearch(query) {
    this.search(query);
    this.scrollWindow();
  }

  scrollWindow() {
    let y = window.innerWidth < 900 && window.innerWidth > 500 ? 300 : window.innerWidth <= 500 ? 400 : 700;
    $('html body').animate({
          scrollTop: scrollTo(0, y)
      }, "slow");
  }

}
