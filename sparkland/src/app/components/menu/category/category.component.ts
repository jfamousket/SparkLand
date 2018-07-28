import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../../services/item-service/item.service';
import { distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input('category') category;

  categoryList: Array<object> = [];

  constructor(private itemService: ItemService) { 

  }

  ngOnInit() {
    this.itemService.getSpecificData()
      .subscribe(categories => {
        categories.forEach((category) => {
          if(!this.categoryList.includes(category["category"])) this.categoryList.push(category['category']);
          return;
        });
      });
  }
}
