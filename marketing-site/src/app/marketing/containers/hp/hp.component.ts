import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html'
})
export class HpComponent implements OnInit {

  private sectionItems:any = [];
  constructor(private _dataService: DataService) {

  }

  ngOnInit() {
    this._dataService.getHomePage().subscribe(
      res => {
        this.sectionItems = res
        console.log("res",this.sectionItems)
      },
      err =>{
        console.log("err ",err)

      }
    )
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
