import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-logo',
  template: `
      <section id="footer-logo">
          <div class="logo-container d-flex justify-content-center">
              <img src="../../../../../assets/images/logo_footer.svg" alt="mercedes-benz-logo-svg which is in footer">
          </div>
      </section>
  `,
  styleUrls: ['./footer-logo.components.scss']
})
export class FooterLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
