import {Component, Input, OnInit} from '@angular/core';
import {ValueHolderBetComService} from "../../../../services/value-holder-bet-com.service";

@Component({
  selector: 'app-top-sides-navigation',
  templateUrl: './top-sides-navigation.component.html',
  styleUrls: ['./top-sides-navigation.component.scss']
})
export class TopSidesNavigationComponent implements OnInit {
  @Input('titleName') title!: string;
  constructor(public vlService: ValueHolderBetComService) { }

  ngOnInit(): void {
  }

}
