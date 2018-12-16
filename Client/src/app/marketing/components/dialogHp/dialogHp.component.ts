import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dialogHp",
  templateUrl: "./dialogHp.component.html"
})
export class DialogHpComponent implements OnInit {
  title: string;
  text: string;
  btnText: string;
  btnLink: any;

  data: any = {};

  @Input() id;

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    if(this.id) {
      this.load();
    } else{
      this.route.paramMap.subscribe(params => {
        this.id = params.get("id");
        this.load();
      });
    }

    
  }

  load() {
    this._dataService
        .getPopupSection(this.id)
        .toPromise()
        .then(res => {
          let data = res;
          this.title = data.title;
          this.text = data.text;
          this.btnText = data.btnText;
          this.btnLink = data.btnLink;
        });
  }
}
