import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html'
})
export class FaqComponent implements OnInit {

    constructor(private _dataService: DataService) { }
    faqPage:any = {};

    ngOnInit(): void {
        this._dataService.getFaqPage().subscribe(
            result => {
                this.faqPage = result
            }
        )
    }

}
