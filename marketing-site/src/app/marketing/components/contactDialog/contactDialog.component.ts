import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../../../services/data.service';


@Component({
    selector: 'app-contactDialog',
    templateUrl: './contactDialog.component.html'
})
export class ContactDialogComponent {

    contactForm: FormGroup;
    mainTitle: string = "";
    title: string = "";
    transactionsOptionsList: [] = [];
    mainTitleSendSuccess:string = "";
    titleSendSuccess:string = "";
    mainTitleSendFailed:string = "";
    imgUrl: string = "";
    btnText: string = "המשך"
    sendSuccess: boolean = false;

    constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ContactDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private _dataService: DataService) {

        this.mainTitle = data.dataContactPage.mainTitle;
        this.title = data.dataContactPage.title;
        this.imgUrl = data.dataContactPage.imgUrl;
        this.transactionsOptionsList = data.dataContactPage.transactionsList;
        this.mainTitleSendSuccess = data.dataContactPage.mainTitleSendSuccess;
        this.titleSendSuccess = data.dataContactPage.titleSendSuccess;
        this.mainTitleSendFailed = data.dataContactPage.mainTitleSendFailed;


        this.contactForm = this._formBuilder.group({
            companyName: ['', Validators.required],
            privateCompany: ['', Validators.required],
            transactionsOption: ['', Validators.required],
            customerName: ['', Validators.required],
            role: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            details: ['', Validators.required],
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    submit() {
        if (!this.sendSuccess) {
            let value = this.contactForm.value;
            if (this.contactForm.valid) {
                // this.dialogRef.close(value);
                this._dataService.sendContactForm(value).subscribe(
                    res => {
                        if(res.success){
                            this.sendSuccess = true;
                            this.mainTitle = this.mainTitleSendSuccess;
                            this.title = this.titleSendSuccess;
                            this.btnText = "סגור";
                        }
                        else{
                            this.mainTitle = this.mainTitleSendFailed;
                            this.title = res.error;
                            console.log('submit result error', res.error)
                        }
                    }, err => {
                        this.mainTitle = this.mainTitleSendFailed;
                        // this.sendSuccess = true;
                        // this.mainTitle = "הפנייה נשלחה בהצלחה";
                        // this.title = "נציג יחזור אליכם בהקדם, <br> תודה!";
                        // this.btnText = "סגור";

                        // console.error('failed to submit', err)
                    }

                )
            }
        } else {
            this.dialogRef.close();
        }

    }

}