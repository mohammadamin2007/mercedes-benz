import {Directive, ElementRef} from '@angular/core';
import {ScrollServiceService} from "../services/scroll-service.service";

@Directive({
  selector: '[appGetHeader]'
})
export class GetHeaderDirective {

  constructor(element: ElementRef, scrollService: ScrollServiceService) {
    scrollService.getHeader(element.nativeElement);
  }

}
