import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


@Component({
    selector: 'app-contactDialog',
    templateUrl: './contactDialog.component.html'
})
export class ContactDialogComponent {

    contactForm: FormGroup;
    mainTitle: string = "";
    title: string = "";
    transactionsOptionsList:IdropDownItem[] = [];
    imgUrl: string = "";
    
    constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<ContactDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {

        this.mainTitle = data.dataContactPage.mainTitle;
        this.title = data.dataContactPage.title;
        this.imgUrl = data.dataContactPage.imgUrl;
        this.transactionsOptionsList = data.dataContactPage.transactionsList;

        this.contactForm = this._formBuilder.group({
            companyName: ['', Validators.required],
            privateCompany: ['', Validators.required],
            transactionsOption: ['', Validators.required],
            customerName: ['', Validators.required],
            role: ['', Validators.required],
            phone: ['', Validators.required],
            email: ['', [Validators.required,Validators.email]],
            details: ['', Validators.required],
        });
    }

    closeDialog() {
        this.dialogRef.close();
    }

    submitForm(){
        let value = this.contactForm.value;
        if(this.contactForm.valid){
            this.dialogRef.close(value);
        }
    }

}