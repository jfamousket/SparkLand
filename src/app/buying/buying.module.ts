import { NgModule } from '@angular/core';

import { CategoryComponent } from './components/menu/category/category.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlateComponent } from './components/plate/plate.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { PlateSummaryComponent } from './components/check-out/plate-summary/plate-summary.component';
import { BuyFormComponent } from './components/menu/buy-form/buy-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    MenuComponent,
    CategoryComponent,
    PlateComponent,
    CheckOutComponent,
    PlateSummaryComponent,
    BuyFormComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class BuyingModule { }
