import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ValueHolderBetComService} from "../../../../services/value-holder-bet-com.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  @ViewChild("formInput") formInput!: ElementRef;
  searchForm: FormGroup;

  constructor(public vlService: ValueHolderBetComService) {
    this.searchForm = new FormGroup({
      'searchItem': new FormControl()
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.vlService.getInput(this.formInput.nativeElement)
  }
}
