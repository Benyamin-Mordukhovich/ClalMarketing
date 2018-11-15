import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent } from 'rxjs';
import { auditTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html'
})
export class HpComponent implements OnInit {
  layerIndex: number = 0;
  scrollDelay: number = 500;
  isScrollEnabled: boolean = true;

  isMobile: boolean;
  showFooter: boolean = false;
  sectionItems: any = [];
  constructor(private _dataService: DataService, @Inject(PLATFORM_ID) private platformId) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = (window.screen.width > 1200) ? false : true;
    }

    this._dataService.getHomePage().subscribe(
      res => {
        this.sectionItems = res.sectionsData;

        this.sectionItems.forEach(e => {
          e.bgUrl = "url(" + e.bgImageMobile + ")";
        });
      }
    )
    
    if(!this.isMobile) {
      const wheel = fromEvent(window, 'wheel')
      .pipe(debounceTime(this.scrollDelay))
      .subscribe( (e: WheelEvent) => {
        if (e.deltaY > 0) {
          this.incrementLayerIndex();
        } else {
          this.decrementLayerIndex();
        }
      });
  
      const keyup = fromEvent(window, 'keyup')
      .pipe(debounceTime(this.scrollDelay))
      .subscribe( (e: KeyboardEvent) => {
        if (e.keyCode === 40) {
          this.incrementLayerIndex();
        }
    
        if (e.keyCode === 38) {
          this.decrementLayerIndex();
        }
      });
    }
  }

  incrementLayerIndex() {
    if(this.layerIndex > this.sectionItems.length - 1) return;
    this.layerIndex++;
  }

  decrementLayerIndex() {
    if(this.layerIndex == 0) return;
    this.layerIndex--;
  }
}
