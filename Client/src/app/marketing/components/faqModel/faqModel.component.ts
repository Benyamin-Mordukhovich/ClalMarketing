import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-faqModel',
    templateUrl: './faqModel.component.html'
})
export class FaqModelComponent {

    @Input() modelFaq:IfaqModel;



}