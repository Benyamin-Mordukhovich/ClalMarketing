import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'app-offerDialog',
    templateUrl: './offerDialog.component.html'
})
export class OfferDialogComponent {



    constructor(public dialogRef: MatDialogRef<OfferDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    closeDialog() {
        this.dialogRef.close();
    }

}