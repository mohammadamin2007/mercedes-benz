import {Component, OnInit} from '@angular/core';
import {ValueHolderBetComService} from "../../../../services/value-holder-bet-com.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-full-navbar',
  templateUrl: './full-navbar.component.html',
  styleUrls: ['./full-navbar.component.scss']
})
export class FullNavbarComponent implements OnInit {
  navItemList = [
    {
      text: "Art & Culture",
    }, {
      text: "Sustainability",
    }, {
      text: "Design",
    }, {
      text: "Innovation",
    }, {
      text: "Exclusive",
    }, {
      text: "Vehicles",
    }
  ];
  artAndCulture = [
    {
      text: "Zeitgeist"
    }, {
      text: "Events & Exhibitions"
    }, {
      text: "Mercedes-Benz Museum"
    }
  ];
  susItemList = [
    {
      text: "Environment"
    }, {
      text: "Responsibility"
    }
  ];
  innItemList = [
    {
      text: "Future Mobility"
    }, {
      text: "Concept Cars"
    }, {
      text: "Milestones"
    }
  ];
  exItemList = [
    {
      text: "Private Lounges"
    }, {
      text: "Mercedes-Benz me Magazine"
    }, {
      text: "Mercedes-Benz Brand Clubs"
    }, {
      text: "Mercedes-Benz Classic Magazine"
    }
  ]

  constructor(public vlService: ValueHolderBetComService, public modalSer: NgbModal) {
  }

  ngOnInit(): void {
  }


}
