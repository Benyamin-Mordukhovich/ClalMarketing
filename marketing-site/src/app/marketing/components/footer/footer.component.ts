import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { OfferDialogComponent } from '../offerDialog/offerDialog.component';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    constructor(public dialog: MatDialog){}
    
    @Input() item;
    openOfferDialog() {
        this.dialog.open(OfferDialogComponent, {})
      }

}