import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faCar,
  faCheckCircle,
  faEnvelope,
  faLocationArrow,
  faMinus,
  faPhone,
  faPlus,
  faQuoteLeft,
  faSearch,
  faStreetView,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemQtyComponent } from './components/item-qty/item-qty.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FilterService } from 'services/filter-service/filter.service';
import { ItemFormService } from 'services/item-form/item-form.service';
import { ItemService } from 'services/item-service/item.service';
import { OrderService } from 'services/order-service/order.service';
import { PlateService } from 'services/plate-service/plate.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


library.add(faFacebook, faInstagram, faSearch, faMinus, faPlus, faPhone, 
  faEnvelope, faWhatsapp, faLocationArrow, faStreetView, faCar, faQuoteLeft, faCheckCircle)

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    ItemCardComponent,
    ItemQtyComponent,
    AddBtnComponent,
    SearchFormComponent,
  ],
  exports: [
    ItemCardComponent,
    AddBtnComponent,
    ItemQtyComponent,
    SearchFormComponent,
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ItemService,
    ItemFormService,
    FilterService,
    PlateService,
    OrderService,
  ]
})
export class SharedModule { }