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
  hpHeight: number = 2500;
  opacityValue: number = 1;
  lastScrollTop: number = 0;

  //@ViewChild('slideSection') slideSectionRef: ElementRef;

  private sectionItems: any = [];

  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.getHomePage().subscribe(
      res => {
        this.sectionItems = res;

        let interval = this.hpHeight / this.sectionItems.length;
        let distance = 0;

        this.sectionItems.forEach(e => {
          e.scrollBegin = distance;
          e.scrollEnd = distance + interval;
          distance += interval;
        });

        //console.log("res",this.sectionItems)
      }
    )

    //create observable that emits click events
    const source = fromEvent(window, 'scroll').pipe(map(e => e));
    source.subscribe(val => {
      this.scrollTop = window.pageYOffset;
    });

  }
  
  // sectionInfoVideo = {
  //   mainTitle: "לעבוד בראש שקט<br>עם ביטוח אשראי מבית כלל",
  //   text: "לראשונה בישראל, שירותי ביטוח אשראי של כלל ניתנים גם לעסקים בינוניים וקטנים,בעלי מחזור הכנסות שנתי שבין 10-50 מיליון שח ביטוח אשראי מאפשר לך לבצע יותר עסקאות בצורה בטוחה,ומקנה ייתרון במימון הבנקאי כל זאת עם גב של חברת כלל ביטוח",
  //   linkReadMore: "www",
  //   linkText: "יצאונים? זקוקים לביטוח פרויקטלי?",
  //   link: "www",
  //   note: "כלל ממשיכה לספק ביטוח מימון פרויקטלי, ביטוח הזמנות ומגוון ביטוחים נוספים המתאימים לעסקים המובילים בשוק"
  // }

}
