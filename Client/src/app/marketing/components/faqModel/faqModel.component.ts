import { Component, Input } from '@angular/core';
import { IfaqModel } from '../../../models';

@Component({
    selector: 'app-faqModel',
    templateUrl: './faqModel.component.html'
})
export class FaqModelComponent {

    @Input() modelFaq:IfaqModel;


}