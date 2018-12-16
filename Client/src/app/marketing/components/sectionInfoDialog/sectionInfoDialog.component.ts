import { Component, Inject } from "@angular/core";
import { MatDialogRef,MAT_DIALOG_DATA  } from "@angular/material";


@Component({
  selector: "app-sectionInfoDialog",
  templateUrl: "./sectionInfoDialog.component.html"
})
export class SectionInfoDialogComponent {

  dataModal;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<SectionInfoDialogComponent>) {
    this.dataModal = data;
    console.log('this.dataModal',this.dataModal)
  }

  closeDialog() {
    this.dialogRef.close();
  }
  
}
