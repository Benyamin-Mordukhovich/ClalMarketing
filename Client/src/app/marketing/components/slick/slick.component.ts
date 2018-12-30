import { Component, Input, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

declare var $;
@Component({
    selector: 'app-slick',
    templateUrl: './slick.component.html'
})
export class SlickComponent implements OnInit {
    
    isServer = false
    @Input() slides;
    slider;

    constructor(@Inject(PLATFORM_ID) platformId) {
        this.isServer = isPlatformServer(platformId)
    }

    slideConfig = { 
        "rtl": true, 
        "dots": true, 
        "slidesToShow": 1, 
        "slidesToScroll": 1
    };

    ngOnInit() {
        if(!this.isServer) {
            setTimeout(() => {
                this.slider = $('.commentsCarusel');
                this.slider.slick(this.slideConfig)
            }, 0)
        }
    }
 
}