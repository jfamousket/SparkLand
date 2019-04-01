import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { BuyingReducers } from "./store/index";

import { CategoryComponent } from "./components/menu/category/category.component";
import { MenuComponent } from "./components/menu/menu.component";
import { PlateComponent } from "./components/plate/plate.component";
import { CheckOutComponent } from "./components/check-out/check-out.component";
import { PlateSummaryComponent } from "./components/check-out/plate-summary/plate-summary.component";
import { BuyFormComponent } from "./components/menu/buy-form/buy-form.component";
import { SharedModule } from "../shared/shared.module";
import { BuyingEffects } from "./store/effects";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("buying", BuyingReducers),
    EffectsModule.forFeature(BuyingEffects)
  ],
  declarations: [
    MenuComponent,
    CategoryComponent,
    PlateComponent,
    CheckOutComponent,
    PlateSummaryComponent,
    BuyFormComponent
  ],
  exports: [MenuComponent]
})
export class BuyingModule {}
