import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule} from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './models/shared/error-handler';
import { OwlModule } from 'ngx-owl-carousel';
import { InterceptorModule } from './models/shared/interceptor.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BuyFormComponent } from './components/menu/buy-form/buy-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CategoryComponent } from './components/menu/category/category.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faMinus, faPlus, faPhone, faEnvelope, faLocationArrow, faStreetView, faCar, faQuoteLeft, faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import { ItemService } from './services/item-service/item.service';
import { FilterService } from './services/filter-service/filter.service';
import { PlateService } from './services/plate-service/plate.service';
import { DataService } from './services/data-service/data.service';
import { SendRequestService } from './services/send-request/send-request.service';
import { ItemFormService } from './services/item-form/item-form.service';
import { PlateComponent } from './components/plate/plate.component';
import { ItemQtyComponent } from './components/item-qty/item-qty.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { OrderService } from './services/order-service/order.service';
import { PlateSummaryComponent } from './components/check-out/plate-summary/plate-summary.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';

library.add(faFacebook, faInstagram, faSearch, faMinus, faPlus, faPhone, 
            faEnvelope, faWhatsapp, faLocationArrow, faStreetView, faCar, faQuoteLeft, faCheckCircle)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    MenuComponent,
    BuyFormComponent,
    BeforeFooterComponent,
    ItemCardComponent,
    CategoryComponent,
    SearchFormComponent,
    PlateComponent,
    ItemQtyComponent,
    CheckOutComponent,
    PlateSummaryComponent,
    AddBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    InterceptorModule,
    FontAwesomeModule
  ],
  providers: [
    DataService,
    SendRequestService,
    ItemService,
    ItemFormService,
    FilterService,
    PlateService,
    OrderService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
