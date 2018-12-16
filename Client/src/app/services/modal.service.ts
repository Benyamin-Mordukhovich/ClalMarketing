import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "./data.service";
import { MatDialog } from "@angular/material";
// import { AboutDialogComponent } from "../marketing/components/aboutDialog/aboutDialog.component";
import { ContactDialogComponent } from "../marketing/components/contactDialog/contactDialog.component";
import { OfferDialogComponent } from "../marketing/components/offerDialog/offerDialog.component";
import { SectionInfoDialogComponent } from "../marketing/components/sectionInfoDialog/sectionInfoDialog.component";

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
            if(!qs.modal) return;
            if (qs.modal == "contact") {
                this._openContact()
            }
            if (qs.modal == "offer") {
                this._openOffer()
            }

            if (qs.modal.startsWith('popupSection')) {
                let id = qs.modal.split('_')[1]; 
                if(id)
                    this._openDialogSectionInfo(id);
            }
        })
    }

    openContactDialog(): void {
        this.setModalParam("contact")
    }

    openOfferDialog(): void {
        this.setModalParam("offer")
    }
    openSectionInfoDialog(id): void {
        this.setModalParam("popupSection_" + id)
    }

    private _openContact() {
        this.dialog.open(ContactDialogComponent, {  }).beforeClose().subscribe(_ => {
            this.setModalParam()
        });
    }

    private _openOffer() {
        this.dialog.open(OfferDialogComponent).beforeClose().subscribe(_ => {
            this.setModalParam()
        })
    }

    private _openDialogSectionInfo(id) {
        this.dialog.open(SectionInfoDialogComponent,{data: {id}}).beforeClose().subscribe(_ => {
            this.setModalParam()
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