import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueHolderBetComService {
  searchOpened: boolean = false;
  searchDisplay: boolean = false;
  searchFormH: boolean = false;
  searchCloseBtn: boolean = false;
  searchFormInput!: HTMLInputElement;
  menuDisplay: boolean = false;
  menuOpen: boolean = false;
  menuH: boolean = false;
  modalProPri!: TemplateRef<any>;
  modalOpened: boolean = false;
  fullscreenSideStatus: string = "main";

  constructor(){}


  // search
  checkSearch() {
    if (this.menuOpen) {
      this.menuH = false;
      this.afCheckSearch()
    } else {
      this.afCheckSearch()
    }
  }
  afCheckSearch() {
    setTimeout(() => {
      this.menuOpen = false;
      setTimeout(() => {
        this.searchDisplay = true;
        this.menuDisplay = false;
        setTimeout(() => {
          this.searchOpened = true;
          setTimeout(() => {
            this.searchFormH = true;
            this.searchFormInput.select();
            this.searchCloseBtn = true;
          },750)
        }, 100)
        document.body.classList.add("overflow-hidden")
      },100)
    }, 750)
  }
  openSearch() {
    this.checkSearch();
  }

  getInput(element: HTMLInputElement) {
    this.searchFormInput = element;
  }

  closeSearch() {
    this.searchCloseBtn = false;
    this.searchFormH = false;
    setTimeout(() => {
      this.searchOpened = false;
      setTimeout(() => {
        this.searchDisplay = false;
        document.body.classList.remove("overflow-hidden");
      },200)
    }, 750)
  }

  // open menu
  checkMenu() {
    if (this.searchOpened) {
      this.searchFormH = false;
      this.searchOpened = false;
      this.afCheckMenu();
    } else {
      this.afCheckMenu();
    }
  }
  afCheckMenu() {
    setTimeout(() => {
      this.searchDisplay = false;
      this.menuDisplay = true;
      setTimeout(() => {
        this.menuOpen = true;
        setTimeout(() => {
          this.menuH = true;
        },750)
      }, 100)
      document.body.classList.add("overflow-hidden");
    },100)
  }
  openMenu() {
    this.checkMenu()
  }

  closeMenu() {
    this.menuH = false;
    setTimeout(() => {
      this.menuOpen = false;
      setTimeout(() => {
        this.menuDisplay = false;
        this.fullscreenSideStatus = "main";
        document.body.classList.remove("overflow-hidden");
      },200)
    }, 750)
  }

  getProPri(modal: TemplateRef<any>) {
    this.modalProPri = modal;
  }

  // fullscreen Navbar
  openItem(sideName: string) {
    this.fullscreenSideStatus = sideName;
  }
  mainSection() {
    this.fullscreenSideStatus = "main";
  }
}
