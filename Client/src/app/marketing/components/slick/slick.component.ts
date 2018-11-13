import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
@Component({
    selector: 'app-slick',
    templateUrl: './slick.component.html'
})
export class SlickComponent {
    
    isServer = false

    constructor(@Inject(PLATFORM_ID) platformId) {
        this.isServer = isPlatformServer(platformId)
    }

    @Input() slides;

    slideConfig = { 
        "rtl": true, 
        "dots": true, 
        "slidesToShow": 1, 
        "slidesToScroll": 1 
    };

 
}