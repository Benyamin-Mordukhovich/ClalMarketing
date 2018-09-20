import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-aboutDialog',
    templateUrl: './aboutDialog.component.html'
})
export class AboutDialogComponent {

    title:string = "";
    rteHtml:string = "";
    link:string="";
    imgUrl:string="";

    constructor(public dialogRef: MatDialogRef<AboutDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.title = data.dataAbout.mainTitle;
            this.rteHtml = data.dataAbout.rteHtml;
            this.link = data.dataAbout.link;
            this.imgUrl = data.dataAbout.imgUrl;
    }

    closeDialog() {
        this.dialogRef.close();
    }

}