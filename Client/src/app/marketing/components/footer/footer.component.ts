import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalService } from '../../../services/modal.service';
import { DataService } from 'src/app/services/data.service';

const isServer = typeof window === "undefined";
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    constructor(public dialog: MatDialog,
        private modalService:ModalService,
        private dataService:DataService) { }

    visible= false
    item = {};
    ngOnInit(): void {

        this.dataService.layoutData.subscribe(data =>{
            this.item = data.footer;
            if(isServer) {
                this.visible = true;
            } else{
                setTimeout(() => {
                    this.visible = true;
                }, 1000)
            }
        })
        
    }



    // openOfferDialog() {
    //     this.dialog.open(OfferDialogComponent, {})
    // }
    openOfferDialog(e:Event): void {
        e.preventDefault();
        this.modalService.openOfferDialog();
      }
}