import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLogoComponent } from "./components/footer-logo/footer-logo.component";
import { FooterMoreComponent } from "./components/footer-more/footer-more.component";
import { FooterTopBtnComponent } from "./components/footer-top-btn/footer-top-btn.component";
import { FooterNavbarComponent } from "./components/footer-navbar/footer-navbar.component";
import { DescriptionFooterComponent } from "./components/description-footer/description-footer.component";
import { ScrollingFooterComponent } from "./components/scrolling-footer/scrolling-footer.component";
import { ScrollPosDirective } from "./directives/scroll-pos.directive";
import {AnimationDirective} from "./directives/animation.directive";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterNavbarComponent,
    FooterMoreComponent,
    FooterTopBtnComponent,
    FooterLogoComponent,
    DescriptionFooterComponent,
    ScrollingFooterComponent,
    ScrollPosDirective,
    AnimationDirective,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterNavbarComponent,
    FooterMoreComponent,
    FooterTopBtnComponent,
    FooterLogoComponent,
    DescriptionFooterComponent,
    ScrollingFooterComponent,
    ScrollPosDirective,
    FooterComponent
  ]
})
export class FooterModule { }
