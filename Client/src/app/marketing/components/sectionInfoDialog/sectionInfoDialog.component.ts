import { Component, Inject, Input } from "@angular/core";
import { MatDialogRef,MAT_DIALOG_DATA  } from "@angular/material";


@Component({
  selector: "app-sectionInfoDialog",
  templateUrl: "./sectionInfoDialog.component.html"
})
export class SectionInfoDialogComponent {

  constructor(public dialogRef: MatDialogRef<SectionInfoDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
  }

  closeDialog() {
    this.dialogRef.close();
  }
  
}
