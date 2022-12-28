import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ScrollServiceService} from "../../../../services/scroll-service.service";

@Component({
  selector: 'app-scrolling-footer',
  templateUrl: './scrolling-footer.component.html',
  styleUrls: ['./scrolling-footer.component.scss']
})
export class ScrollingFooterComponent implements OnInit, AfterViewInit {
  navItemList: {text: string}[] = [
    {
      text: "Purchase"
    },
    {
      text: "Finance"
    },
    {
      text: "Services"
    }
  ]
  menuList: {list: {text: string}[]}[] = [
    {
      list: [
        {
          text: "Vehicles"
        }, {
          text: "Accessories"
        }, {
          text: "Mercedes Me"
        }, {
          text: "Lifestyle Collection"
        }, {
          text: "Classic Cars"
        }
      ]
    },
    {
      list: [
        {
          text: "Leasing"
        }, {
          text: "Rent"
        }, {
          text: "Insurance"
        }
      ]
    },
    {
      list: [
        {
          text: "Mercedes me"
        }, {
          text: "Service & Parts"
        }, {
          text: "Driving Aids"
        }
      ]
    }
  ]
  @ViewChildren('scrollPos') scrollPosL!: any;
  positionFooter!: ElementRef[];

  constructor(public scroll: ScrollServiceService) {
  }

  ngOnInit(): void {
  }

  footerScroll(i: number) {
    this.positionFooter[i].nativeElement.scrollIntoView();
  }

  ngAfterViewInit() {
    this.positionFooter = this.scrollPosL._results;
  }


}
