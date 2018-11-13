import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalService } from '../../../services/modal.service';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    constructor(public dialog: MatDialog,private modalService:ModalService) { }

    @Input() item;
    // openOfferDialog() {
    //     this.dialog.open(OfferDialogComponent, {})
    // }
    openOfferDialog(e:Event): void {
        e.preventDefault();
        this.modalService.openOfferDialog();
      }
}