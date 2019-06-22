import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { OwlModule } from "ngx-owl-carousel";
import { BuyingModule } from "./buying/buying.module";
import { reducers, metaReducers } from "src/app/store-app/index";
import { AppErrorHandler } from "./shared/error-handler";

import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { BeforeFooterComponent } from "./components/before-footer/before-footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { DataService } from "./services/data-service/data.service";
import { ErrorService } from "services/error-service/error.service";
import { NotifyBarComponent } from "./components/notify-bar/notify-bar.component";
import { environment } from "src/environments/environment";
import { SharedEffects } from "./store-app/shared.effects";

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
    NotifyBarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SharedEffects]),
    BuyingModule,
    AppRoutingModule,
    OwlModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    DataService,
    ErrorService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
