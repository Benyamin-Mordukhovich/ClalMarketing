import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-sectionInfo',
    templateUrl: './sectionInfo.component.html'
})
export class SectionInfoComponent {
    @Input() infoObj;
    constructor() { }
}