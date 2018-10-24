import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html'
})
export class HpComponent implements OnInit {
  scrollTop: number;
  stripHeight: number = 0;
  opacityValue: number = 1;
  lastScrollTop: number = 0;
  windowHeight: number = 0;
  hpHeight: any = 'auto';
  //@ViewChild('slideSection') slideSectionRef: ElementRef;
  showFooter:boolean = false;
  sectionItems: any = [];
  footerItem = {};

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {

    this.windowHeight = (window.innerHeight);

    this._dataService.getHomePage().subscribe(
      res => {
        this.sectionItems = res.sectionsData;
        this.footerItem = res.footer;

        this.sectionItems.forEach(e => {
          e.bgUrl = "url(" + e.bgImageMobile + ")";
        });

        if (window.screen.width > 1200) {

          this.stripHeight = this.windowHeight * this.sectionItems.length;
          this.hpHeight = this.stripHeight + this.windowHeight;
          let interval = this.stripHeight / this.sectionItems.length;
          let distance = 0;

          this.sectionItems.forEach(e => {
            e.scrollBegin = distance;
            e.scrollEnd = distance + interval;
            e.bgUrl = "url(" + e.bgImage + ")";
            distance += interval;
          });
        }
      


      }
    )

    //create observable that emits click events
    const source = fromEvent(window, 'scroll').pipe(map(e => e));
    source.subscribe(val => {
      this.scrollTop = window.pageYOffset;
    });

    setTimeout(()=>{
      this.showFooter = true;
    },1000)

  }

}
