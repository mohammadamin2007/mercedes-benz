import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-top-btn',
  template: `
    <section id="top-btn" class="d-flex">
      <a href="#page-top" class="top-btn-link text-white text-decoration-none d-flex align-items-center flex-column">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.121 19.728l-.707-.707 7.07-7.071-7.07-7.071.707-.707 7.07 7.07h.001l.707.708-7.778 7.778z" fill="currentColor" fill-rule="evenodd"></path></svg>
        <span class="text">Top</span>
      </a>
    </section>
  `,
  styleUrls: ['./footer-top-btn.component.scss']
})
export class FooterTopBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
