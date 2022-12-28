import {Directive, ElementRef} from '@angular/core';
import {ScrollServiceService} from "../../../services/scroll-service.service";

@Directive({
  selector: '[appScrollPos]'
})
export class ScrollPosDirective {

  constructor(element: ElementRef , scrollService: ScrollServiceService) {
    scrollService.getScrollPosition(element.nativeElement)
  }

}
