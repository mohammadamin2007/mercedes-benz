import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-navbar',
  templateUrl: './footer-navbar.component.html',
  styleUrls: ['./footer-navbar.component.scss']
})
export class FooterNavbarComponent implements OnInit {
  footerNavList = [
    {
      text: "Provider"
    }, {
      text: "Legal Notice"
    }, {
      text: "Cookies"
    }, {
      text: "Privacy Statement"
    }, {
      text: "Newsroom"
    }, {
      text: "Contact"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
