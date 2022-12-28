import { Component, OnInit } from '@angular/core';
import {ValueHolderBetComService} from "../../../../services/value-holder-bet-com.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-full-navbar-footer',
  templateUrl: './full-navbar-footer.component.html',
  styleUrls: ['./full-navbar-footer.component.scss']
})
export class FullNavbarFooterComponent implements OnInit {
  collapseItemList = [
    {
      text: "Mercedes me"
    }, {
      text: "G-Class Private Lounge"
    }, {
      text: "AMG Private Lounge"
    }
  ];
  loginCollapse: boolean = true;

  constructor(public vlService: ValueHolderBetComService, public modalSer: NgbModal) { }

  ngOnInit(): void {
  }

  openModule() {
    this.modalSer.open(this.vlService.modalProPri);
    this.vlService.modalOpened = true;
  }
}
