import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ScrollServiceService} from "../../../../services/scroll-service.service";
import {ValueHolderBetComService} from "../../../../services/value-holder-bet-com.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit, AfterViewInit {
  pageName: string = "Provider";
  paginationTitleList = [
    {
      text: "Provider"
    }, {
      text: "Legal Notice"
    }, {
      text: "Cookies"
    }, {
      text: "Privacy Statement"
    },
  ];
  dropItemList = [
    {
      text: "Mercedes me"
    }, {
      text: "G-Class Private Lounge"
    }, {
      text: "AMG Private Lounge"
    }
  ];
  navbarNavList = [
    {
      text: "Art & Culture",
      white: true,
    }, {
      text: "Sustainability",
      white: true,
    }, {
      text: "Design",
      white: true,
    }, {
      text: "Innovation",
      white: true,
    }, {
      text: "Exclusive",
      white: true,
    }, {
      text: "Vehicles",
      white: true,
    }
  ];
  navbarLoad:boolean = true;
  navbarContent:boolean = true;
  @ViewChild("proPri") proPri!: TemplateRef<any>;

  constructor(public scrollService: ScrollServiceService,public vlService: ValueHolderBetComService, public modalService: NgbModal) {
  }

  active(index: string) {
    this.pageName = index;
  }

  ngOnInit(): void {
    if (window.scrollY > 250) {
      this.navbarContent = false;
      this.navbarLoad = false;
    }
  }

  hovered(operation: string, index: number) {
    for (let i = 0; i < this.navbarNavList.length; i++) {
      if (operation == "enter") {
        this.navbarNavList[i].white = i == index;
      } else {
        this.navbarNavList[i].white = true;
      }
    }
  }

  dismiss(proPri: TemplateRef<any>) {
    this.modalService.dismissAll();
    this.vlService.modalOpened = false;
  }

  ngAfterViewInit() {
    if(window.scrollY < 250) {
      setTimeout(() => {
        this.navbarContent = false;
        setTimeout(() => {
          this.navbarLoad = false;
        }, 1000)
      }, 2000)
    } else {
      if (window.scrollY > 250) {
        this.navbarContent = false;
        this.navbarLoad = false;
      }
    }
    this.vlService.getProPri(this.proPri);
  }
}
