import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-contactDialog",
  templateUrl: "./contactDialog.component.html"
})
export class ContactDialogComponent {
  contactForm: FormGroup;
  mainTitle: string = "";
  title: string = "";
  transactionsOptionsList: any[] = [];
  mainTitleSendSuccess: string = "";
  titleSendSuccess: string = "";
  mainTitleSendFailed: string = "";
  imgUrl: string = "";
  btnText: string = "המשך";
  sendSuccess: boolean = false;

  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {}
}
