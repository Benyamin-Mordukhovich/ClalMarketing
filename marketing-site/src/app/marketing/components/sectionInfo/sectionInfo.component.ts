import { Component, Input, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'app-sectionInfo',
    templateUrl: './sectionInfo.component.html'
})
export class SectionInfoComponent   {
    @Input() infoObj;
    @ViewChild('videoRef') videoElementRef: ElementRef;
    isVideoPlaying:boolean = false;
    constructor() { }

    playVideo(){
        if (this.infoObj.videoUrl.length ){
            if(this.isVideoPlaying == false){
                this.videoElementRef.nativeElement.play();
                this.isVideoPlaying = true;
            }
        }
    }

    stopVideo(){
        if(this.isVideoPlaying == true){
            this.videoElementRef.nativeElement.pause();
            this.isVideoPlaying = false;
        }
    }

}