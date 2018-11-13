import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  rteHtml: string;
  @Input()
  link: any;
  @Input()
  imgUrl: string;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService
      .getAboutData()
      .toPromise()
      .then(res => {
        this.title = res.mainTitle;
        this.rteHtml = res.rte;
        this.link = res.link;
        this.imgUrl = res.imgUrl;
      });
  }
}
