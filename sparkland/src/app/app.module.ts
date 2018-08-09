import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OwlModule } from 'ngx-owl-carousel';
import { AppErrorHandler } from './shared/error-handler';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data-service/data.service';
import { SendRequestService } from './services/send-request/send-request.service';
import { SharedModule } from './shared/shared.module';
import { BuyingModule } from './buying/buying.module';
import { ErrorService } from 'services/error-service/error.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    BeforeFooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BuyingModule,
    AppRoutingModule,
    OwlModule,
  ],
  providers: [
    DataService,
    SendRequestService,
    ErrorService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
