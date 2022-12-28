import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teaser-card',
  templateUrl: './teaser-card.component.html',
  styleUrls: ['./teaser-card.component.scss']
})
export class TeaserCardComponent implements OnInit {
  showBtn: boolean = false;
  transitionDelayWords: number = 0;
  @Input("teaser-info") teaserInfo!: {teaserID: string, teaserName: string, teaserImg: string, teaserTitleWrap: {text: string}[]};

  constructor() {
  }


  ngOnInit(): void {
  }

  moveMore(btn: HTMLElement,event: MouseEvent) {
    if(window.innerWidth > 1024) {
      btn.style.top = event.offsetY - 30 + 'px';
      btn.style.left = event.offsetX - 30 + 'px';
    }
  }
}
