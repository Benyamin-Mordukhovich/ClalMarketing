import { Component, Input, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector: 'app-sectionInfo',
    templateUrl: './sectionInfo.component.html'
})
export class SectionInfoComponent {
    @Input() infoObj;

    @ViewChild('videoRef') videoElementRef: ElementRef;

    isVideoPlaying:boolean = false;
    constructor() { }

    playVideo(){
        if (this.infoObj.videoUrl.length ) {
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

    ngOnInit() {
        setTimeout(()=> {
            let videoBgs = [
                document.querySelectorAll('video')[1],
                document.querySelectorAll('video')[2],
                document.querySelectorAll('video')[3],
                document.querySelectorAll('video')[4]
            ]

            videoBgs.forEach( video => {
                video.muted = true;
                video.play();
            })
        }, 0)
    }


}