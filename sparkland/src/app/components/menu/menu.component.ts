import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../../services/item-service/item.service';
import { MenuItem } from '../../shared/menu-item';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../services/filter-service/filter.service';
import { Http } from '@angular/http';
import { AppError, MenuError } from '../../shared/app-error';
import { NotFoundError } from '../../shared/not-found';
import { throwError, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
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
      (error: AppError) => {
        if(error instanceof NotFoundError) return this.emptyMenu = "Looks like there is nothing on our menu right now kindly check back later"
          else return throwError(new MenuError());
      });
   }

ngOnInit() {
  this.getAllItems();
  this.filterByCategory();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
