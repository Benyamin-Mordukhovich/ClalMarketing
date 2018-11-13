import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTransitionSlide]'
})
export class TransitionSlideDirective {
  @Input() infoObj;
  @Input() index: number;
  @Input() itemsNumber: number;

  private _scrollTop: number;
  public lastScrollTop: number = 0;
  public opacityValue: number = 1;
  public scaleValue: number = 1;
  public visibilityValue: string = 'visible';
  public el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @Input()
  set scrollTop(scrollTop: number) {
    this._scrollTop = scrollTop || 0;

    this.el.nativeElement.style.opacity = getCssValue(this._scrollTop, this.lastScrollTop, 'decrease', this.infoObj.scrollBegin, this.infoObj.scrollEnd) / 100;
    this.el.nativeElement.style.transform = 'scale(' + (1 + getCssValue(this._scrollTop, this.lastScrollTop, 'increase', this.infoObj.scrollBegin, this.infoObj.scrollEnd) / 100) + ')';
    this.el.nativeElement.style.visibility = getVisibility(this._scrollTop, this.lastScrollTop, this.infoObj.scrollEnd);
    this.lastScrollTop = this._scrollTop <= 0 ? 0 : this._scrollTop;
  }

  get appTransitionSlide(): number { return this._scrollTop; }

}

function getCssValue(st: number, lastScrollTop: number, cssValueDir: string, scrollBegin: number, scrollEnd: number): number {
  let percentage;

  if (st > lastScrollTop) {
    if (st < scrollBegin) return;
  } else {
    if (st > scrollEnd) return;
  }

  if (scrollBegin > st) return;
  
  if (cssValueDir == "decrease") {
    percentage = 100 - ((st - scrollBegin) / ((scrollEnd - scrollBegin) / 100));
    if (percentage <= 0) return;
    if (percentage >= 80) return 100;
  } else {
    percentage = ((st - scrollBegin) / ((scrollEnd - scrollBegin) / 100));
    if (percentage >= 100) return;
    if (percentage <= 20) return 0;
  }
  
  return percentage;
}

function getVisibility(st: number, lastScrollTop: number, scrollEnd: number): string {
  let visibilityValue;

  if (st > lastScrollTop) {
    //console.log("scroll down");
    if (st > scrollEnd - 300) {
      //console.log("hidden");
      visibilityValue = "hidden";
    }
  } else {
    //console.log("scroll up");
    if (st < scrollEnd + 300) {
      //console.log("visible");
      visibilityValue = "visible";
    }
  }
  return visibilityValue;
}