import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ItemService } from 'services/item-service/item.service';
import { MenuItem } from 'shared/models/menu-item';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from 'services/filter-service/filter.service';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  noResult = false;
  emptyMenu;
  category: string;
  itemList: Array<MenuItem> = [];
  filteredList: Array<MenuItem> = [];
  searchValue: string = "";
  subscription: Subscription;
  
  constructor(private itemService: ItemService, private http: Http,
              private route: ActivatedRoute,
              private filterService: FilterService) {

   }

   search(eventArgs) {
     if(eventArgs) {
       this.filteredList = eventArgs.filteredList;
      this.noResult = eventArgs.noResult; 
      this.searchValue = eventArgs.query;
     }
   }
   filterByCategory() {
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredList = this.filterService.filterCategory(params.get('category'));
    });
   }

   getAllItems() {
    this.subscription = this.itemService.getAllData()
      .subscribe(items => this.itemList = this.filteredList = items,
      (error) => {
        error.message = "Looks like our servers are down. Please try again";
        this.emptyMenu = error.message;
      });
   }

ngOnInit() {
  this.getAllItems();
  this.filterByCategory();
  $('#category').click(() => {
    this.scrollWindow();
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }  
  
  private scrollWindow() {
    let y = window.innerWidth < 900 && window.innerWidth > 500 ? 300 : window.innerWidth <= 500 ? 400 : 650;
    $('#menu').animate({
          scrollTop: scrollTo(0, y)
    }, 500);
  }

}
