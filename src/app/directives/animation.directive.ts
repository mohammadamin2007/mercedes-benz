import {Directive, ElementRef} from '@angular/core';
import {ScrollServiceService} from "../services/scroll-service.service";

@Directive({
  selector: '[appAnimation]'
})
export class AnimationDirective {

  constructor(element: ElementRef,scrollService: ScrollServiceService) {
    scrollService.getAnimationElement(element.nativeElement)
  }

}
