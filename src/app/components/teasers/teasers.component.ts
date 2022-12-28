import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teasers',
  templateUrl: './teasers.component.html',
  styleUrls: ['./teasers.component.scss']
})
export class TeasersComponent implements OnInit {
  bgTeaser: {teaserName: string, teaserImg: string, teaserTitleWrap: ({text: string})[], teaserID: string} = {
    teaserID: "innovation",
    teaserName: "innovation",
    teaserImg: "assets/images/innovation.webp",
    teaserTitleWrap: [
      {
        text: "Welcome"
      }, {
        text: "to"
      }, {
        text: "the"
      }, {
        text: "Magical"
      }, {
        text: "Garage"
      },
    ]
  }
  teasersList: {teaserID: string, teaserName: string, teaserImg: string, teaserTitleWrap: {text: string}[]}[] = [
    {
      teaserID: "vehicles",
      teaserName: "Vehicles",
      teaserImg: "assets/images/vehicles.webp",
      teaserTitleWrap: [
        {
          text: "The"
        }, {
          text: "G-Class:"
        }, {
          text: "For"
        }, {
          text: "Those"
        }, {
          text: "who"
        }, {
          text: "live"
        }, {
          text: "forever"
        },
      ]
    } ,
    {
      teaserID: "sustainability",
      teaserName: "sustainability",
      teaserImg: "assets/images/sustainability.jpeg",
      teaserTitleWrap: [
        {
          text: "The"
        }, {
          text: "most"
        }, {
          text: "valuable"
        }, {
          text: "car"
        }, {
          text: "of"
        }, {
          text: "the"
        }, {
          text: "world"
        }, {
          text: "sold"
        }, {
          text: "for"
        }, {
          text: "a"
        }, {
          text: "record"
        } , {
          text: "price"
        } , {
          text: "to"
        } , {
          text: "benefit"
        } , {
          text: "the"
        } , {
          text: "Mercedes-Benz"
        } , {
          text: "Fund."
        }
      ]
    } ,
    {
      teaserID: "art",
      teaserName: "Art & Culture",
      teaserImg: "assets/images/Art.jpeg",
      teaserTitleWrap: [
        {
          text: "Sunglasses"
        }, {
          text: "for"
        }, {
          text: "exclusive"
        }, {
          text: "visibility."
        }
      ]
    },
    {
      teaserID: "vehicles2",
      teaserName: "Vehicles",
      teaserImg: "assets/images/vehicles.jpeg",
      teaserTitleWrap: [
        {
          text: "An"
        }, {
          text: "icon"
        }, {
          text: "embraces"
        }, {
          text: "the"
        }, {
          text: "future."
        }, {
          text: "The"
        }, {
          text: "Concept"
        }, {
          text: "EQG"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
