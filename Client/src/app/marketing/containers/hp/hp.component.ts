import { Component, OnInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html'
})
export class HpComponent implements OnInit {
  isMobile: boolean;
  scrollTop: number;
  stripHeight: number = 0;
  opacityValue: number = 1;
  lastScrollTop: number = 0;
  windowHeight: number = 0;
  hpHeight: any = 'auto';
  //@ViewChild('slideSection') slideSectionRef: ElementRef;
  showFooter: boolean = false;
  sectionItems: any = [];
  constructor(private _dataService: DataService, @Inject(PLATFORM_ID) private platformId) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowHeight = (window.innerHeight);
      this.isMobile = (window.screen.width > 1200) ? false : true;
    }

    this._dataService.getHomePage().subscribe(
      res => {
        this.sectionItems = res.sectionsData;

        this.sectionItems.forEach(e => {
          e.bgUrl = "url(" + e.bgImageMobile + ")";
        });
        
        if (!this.isMobile) {

          let animationDisableAreaHeight = 400;
          let animationTransitionAdditionalArea = 5000;
          
          this.stripHeight = (this.windowHeight * this.sectionItems.length) + animationTransitionAdditionalArea;
          this.hpHeight = this.stripHeight + this.windowHeight;

          let interval = this.stripHeight / (this.sectionItems.length + 1);
          let distance = 0;

          this.sectionItems.forEach((e, index) => {
            e.scrollBegin = distance + animationDisableAreaHeight;
            e.scrollEnd = distance + interval - animationDisableAreaHeight;
            distance += interval;

            console.log(`begin: ${e.scrollBegin} | end: ${e.scrollEnd}`);
          });
        }
      }
    )

    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll').subscribe( () => {
        this.scrollTop = window.pageYOffset;
      });

    } 
  }
}
