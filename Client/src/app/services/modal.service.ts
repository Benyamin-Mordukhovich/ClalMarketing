import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "./data.service";
import { MatDialog } from "@angular/material";
// import { AboutDialogComponent } from "../marketing/components/aboutDialog/aboutDialog.component";
import { ContactDialogComponent } from "../marketing/components/contactDialog/contactDialog.component";
import { OfferDialogComponent } from "../marketing/components/offerDialog/offerDialog.component";

@Injectable({ providedIn: "root" })
export class ModalService {
    constructor(
        private _router: Router,
        private activatedRoute: ActivatedRoute,
        private _dataService: DataService,
        public dialog: MatDialog) {

    }

    listen() {
        this.activatedRoute.queryParams.subscribe(qs => {
            // if(qs.modal == "about") {
            //     this._openAbout()
            // }
            if(qs.modal == "contact") {
                this._openContact()
            }
            if(qs.modal == "offer"){
                this._openOffer()
            }
        })
    }

    // openAboutDialog(): void {
    //     this.setModalParam("about")
    // }
    openContactDialog():void{
        this.setModalParam("contact")
    }

    openOfferDialog():void{
        this.setModalParam("offer")
    }

    // private _openAbout() {
    //     this.dialog.open(AboutDialogComponent).beforeClose().subscribe(_ => {
    //         this.setModalParam()
    //     })
    // }

    private _openContact() {
        this._dataService.getContactData().toPromise().then(res => {
            let data = {
                dataContactPage: res
            };
            this.dialog.open(ContactDialogComponent, {data}).beforeClose().subscribe(_ => {
                this.setModalParam()
            })
        })
    }

    private _openOffer() {
        this._dataService.getOfferData().toPromise().then(res => {
            let data = {
                dataOfferPage: res
            };
            this.dialog.open(OfferDialogComponent, {data}).beforeClose().subscribe(_ => {
                this.setModalParam()
            })
        })
    }

    setModalParam(value?) {
        this._router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                modal: value
            },
            queryParamsHandling: 'merge',
        })

    }
}