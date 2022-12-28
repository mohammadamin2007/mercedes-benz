import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-more',
  templateUrl: './footer-more.component.html',
  styleUrls: ['./footer-more.component.scss']
})
export class FooterMoreComponent implements OnInit {
  moreColumnList = [
    {
      title: "About Us",
      list: [
        {
          text: "Mercedes-Benz Group AG"
        }, {
          text: "Business Units"
        }, {
          text: "Investors"
        }, {
          text: "Press"
        }
      ]
    }, {
      title: "Careers",
      list: [
        {
          text: "Job Search"
        }, {
          text: "Professionals"
        }, {
          text: "Graduates"
        }, {
          text: "Students"
        }, {
          text: "Talent Programs"
        },
      ]
    }, {
      title: "Knowledge Center",
      list: [
        {
          text: "Consumption & Emissions"
        }, {
          text: "Mercedes-Benz Energy Storage"
        }, {
          text: "Real Driving Emissions"
        }, {
          text: "Semiconductor Availability"
        }, {
          text: "UN 38.3 Test"
        },
      ]
    }, {
      title: "Business Services",
      list: [
        {
          text: "Fleet Sales"
        }, {
          text: "Training for Authorized Dealers"
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
