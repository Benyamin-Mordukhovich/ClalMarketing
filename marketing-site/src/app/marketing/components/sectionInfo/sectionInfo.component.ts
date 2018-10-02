import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-sectionInfo',
    templateUrl: './sectionInfo.component.html'
})
export class SectionInfoComponent {
    @Input() infoObj;

    private _scrollTop: number = 0;
    public lastScrollTop: number = 0;
    public opacityValue: number = 1;
    public scaleValue: number = 1;
    public visibilityValue: string = 'visible';

    @Input()
    set scrollTop(scrollTop: number) {
        this._scrollTop = scrollTop || 0;
        this.opacityValue = getCssValue(this._scrollTop, this.lastScrollTop, 'decrease', this.infoObj.scrollBegin, this.infoObj.scrollEnd) / 100;
        this.scaleValue = 1 + getCssValue(this._scrollTop, this.lastScrollTop, 'increase', this.infoObj.scrollBegin, this.infoObj.scrollEnd) / 100;
        this.lastScrollTop = this._scrollTop <= 0 ? 0 : this._scrollTop;
    }

    get scrollTop(): number { return this._scrollTop; }

    constructor() { }
}

function getCssValue(st: number, lastScrollTop: number, cssValueDir: string, scrollBegin: number, scrollEnd: number): number {
    let percentage;

    if (st > lastScrollTop) {
        //console.log("scroll down");
        if(st > scrollEnd) {
            console.log("hidden");
            this.visibilityValue = "hidden";
        }
    } else {
        //console.log("scroll up");
        if(st < scrollEnd) {
            console.log("visible");
            this.visibilityValue = "visible";
        }
    }

    if (st < scrollBegin) return;

    if (cssValueDir == "decrease") {
        percentage = 100 - ((st - scrollBegin) / ((scrollEnd - scrollBegin) / 100));                
        if(percentage <= 0) return;
    } else {
        percentage = ((st - scrollBegin) / ((scrollEnd - scrollBegin) / 100));
        if(percentage >= 100) return;
    }

    return percentage;
}