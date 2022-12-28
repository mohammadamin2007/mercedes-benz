import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {
  navbarStatus:boolean = false;
  scrollPosition: Element[] = [];
  activeList: { item: number, type: string, itemShow: number } = {
    item: 0,
    type: "down",
    itemShow: 0,
  }
  lastScroll: number = 0;
  animationList: Element[] = [];
  scrollBiggerThan250: boolean = false;
  headerTwo!: Element;

  constructor() {
    this.lastScroll = window.scrollY;
    window.onscroll = () => {
      this.navbarStatus = this.lastScroll < window.scrollY;
      this.scrollPosition.forEach(element => {
        if(element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0 && element.getBoundingClientRect().bottom < window.innerHeight) {
          this.activeList.item = this.scrollPosition.indexOf(element);
          this.activeList.type = this.lastScroll < window.scrollY? "down": "up";
          setTimeout(() => {
            this.activeList.itemShow = this.scrollPosition.indexOf(element);
          }, 550)
        }
      });
      this.lastScroll = window.scrollY;
      this.animationList.forEach(item => {
        if(item.getBoundingClientRect().top > 0 && item.getBoundingClientRect().top < window.innerHeight - window.innerHeight / 3.8) {
          item.classList.add("ready");
        }
        if(item.classList.contains("back") && item.getBoundingClientRect().top > window.innerHeight - window.innerHeight / 3.8){
            item.classList.remove("ready");
        }
      })
    }
  }

  getScrollPosition(element: Element) {
    this.scrollPosition.push(element);
  }

  getAnimationElement(element: Element) {
    this.animationList.push(element);
  }

  getHeader(element: Element) {
    this.headerTwo = element;
  }
}
