import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-slick',
    templateUrl: './slick.component.html'
})
export class SlickComponent {


    constructor() {
    }

    @Input() slides;

    slideConfig = { 
        "rtl": true, 
        "dots": true, 
        "slidesToShow": 1, 
        "slidesToScroll": 1 
    };

 
}