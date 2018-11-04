import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
@Component({
  selector: "app-aboutDialog",
  templateUrl: "./aboutDialog.component.html"
})
export class AboutDialogComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public dialogRef: MatDialogRef<AboutDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
