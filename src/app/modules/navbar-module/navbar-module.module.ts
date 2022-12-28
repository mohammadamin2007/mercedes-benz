import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FullNavbarComponent } from "./components/full-navbar/full-navbar.component";
import { SearchComponent } from "./components/search/search.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {SpacerPipePipe} from "./pipe/spacer-pipe.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import { FullNavbarFooterComponent } from './components/full-navbar-footer/full-navbar-footer.component';
import { TopSidesNavigationComponent } from './components/top-sides-navigation/top-sides-navigation.component';
import { GeneralNavComponent } from './components/general-nav/general-nav.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FullNavbarComponent,
    SearchComponent,
    SpacerPipePipe,
    FullNavbarFooterComponent,
    TopSidesNavigationComponent,
    GeneralNavComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent,
    FullNavbarComponent,
    SearchComponent,
    SpacerPipePipe,
    GeneralNavComponent
  ]
})
export class NavbarModule { }
