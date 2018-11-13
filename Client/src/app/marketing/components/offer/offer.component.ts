import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.component.html"
})
export class OfferComponent implements OnInit {


  constructor(private _dataService: DataService) {}

    offerData:any = {}

  ngOnInit() {
    this._dataService
      .getOfferData()
      .toPromise()
      .then(res => {
          this.offerData = res
        // this.title = res.mainTitle;
        // this.rteHtml = res.rte;
        // this.link = res.link;
        // this.imgUrl = res.imgUrl;
      });
  }
}
