import { NgModule } from "@angular/core";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { Routes, RouterModule } from "@angular/router";
import { CustomSerializer } from "shared/store/index";

import { HomeComponent } from "./components/home/home.component";
import { MenuComponent } from "src/app/buying/components/menu/menu.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PlateComponent } from "src/app/buying/components/plate/plate.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "plate",
    component: PlateComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
