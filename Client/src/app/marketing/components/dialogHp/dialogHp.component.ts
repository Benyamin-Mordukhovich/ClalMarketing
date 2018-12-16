import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-dialogHp",
  templateUrl: "./dialogHp.component.html"
})
export class DialogHpComponent implements OnInit {
  title: string;
  text: string;
  btnText: string;
  btnLink: any;

  data:any = {}


  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService
      .getPopupSection2()
      .toPromise()
      .then(res => {
        let data = res;
        console.log('res',res)
        this.title = data.title;
        this.text = data.text;
        this.btnText = data.joinBtn.text;
        this.btnLink = data.joinBtn.linkUrl;
      });
  }
}
