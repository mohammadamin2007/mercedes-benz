import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {ScrollServiceService} from "./services/scroll-service.service";
import { TeasersComponent } from './components/teasers/teasers.component';
import { TeaserCardComponent } from './components/teaser-card/teaser-card.component';
import { FiftyYearComponent } from './components/fifty-year/fifty-year.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ValueHolderBetComService} from "./services/value-holder-bet-com.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnimationDirective } from './directives/animation.directive';
import { GetHeaderDirective } from './directives/get-header.directive';
import {FooterModule} from "./modules/footer-module/footer.module";
import {NavbarModule} from "./modules/navbar-module/navbar-module.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeasersComponent,
    TeaserCardComponent,
    FiftyYearComponent,
    SocialMediaComponent,
    AnimationDirective,
    GetHeaderDirective,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    FooterModule,
    NavbarModule
  ],
  providers: [ScrollServiceService, ValueHolderBetComService],
  bootstrap: [AppComponent],
})
export class AppModule { }
