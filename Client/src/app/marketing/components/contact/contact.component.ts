import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../../../services/data.service";
import { Ifield } from "../../../models";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html"
})
export class ContactComponent implements OnInit {
  @Input()
  contactForm: FormGroup;
  @Input()
  mainTitle: string = "";
  @Input()
  title: string = "";
  @Input()
  transactionsOptionsList: any[] = [];
  @Input()
  mainTitleSendSuccess: string = "";
  @Input()
  titleSendSuccess: string = "";
  @Input()
  mainTitleSendFailed: string = "";
  @Input()
  imgUrl: string = "";
  @Input()
  btnText: string = "המשך";
  @Input()
  sendSuccess: boolean = false;
  @Input()
  fieldList: Ifield[] = [];

  @Output()
  done = new EventEmitter();

  constructor(
    private _dataService: DataService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this._dataService
      .getContactData()
      .toPromise()
      .then(res => {
        this.mainTitle = res.mainTitle;
        this.title = res.title;
        this.imgUrl = res.imgUrl;
        this.transactionsOptionsList = res.transactionsList;
        this.mainTitleSendSuccess = res.mainTitleSendSuccess;
        this.titleSendSuccess = res.titleSendSuccess;
        this.mainTitleSendFailed = res.mainTitleSendFailed;
        this.fieldList = res.fieldList;
      });
    this.contactForm = this._formBuilder.group({
      companyName: ["", Validators.required],
      privateCompany: ["", Validators.required],
      transactionsOption: ["", Validators.required],
      customerName: ["", Validators.required],
      role: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      details: ["", Validators.required]
    });
  }

  submit() {
    if (!this.sendSuccess) {
      let value = this.contactForm.value;
      if (this.contactForm.valid) {
        // this.dialogRef.close(value);
        this._dataService.sendContactForm(value).subscribe(
          res => {
            if (res.success) {
              this.sendSuccess = true;
              this.mainTitle = this.mainTitleSendSuccess;
              this.title = this.titleSendSuccess;
              this.btnText = "סגור";
            } else {
              this.mainTitle = this.mainTitleSendFailed;
              this.title = res.error;
              console.log("submit result error", res.error);
            }
          },
          () => {
            this.mainTitle = this.mainTitleSendFailed;
          }
        );
      }
    } else {
      this.done.emit();
    }
  }
}
