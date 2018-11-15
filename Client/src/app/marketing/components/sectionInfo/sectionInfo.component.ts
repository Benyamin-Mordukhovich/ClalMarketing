import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: "app-sectionInfo",
  templateUrl: "./sectionInfo.component.html"
})
export class SectionInfoComponent implements OnInit {
  @Input() infoObj;
  @Input() isMobile;

  @Input()
  set layerIndex(layerIndex: number) {
    if(layerIndex == 1) {
      this.resetVideo();
    }
  }
  
  @ViewChild("videoRef") videoElementRef: ElementRef;
  
  isVideoPlaying: boolean = false;
  constructor() { }
  
  playVideo() {
    if (this.infoObj.videoUrl.length) {
      if (this.isVideoPlaying == false) {
        this.videoElementRef.nativeElement.play();
        this.isVideoPlaying = true;
      }
    }
  }
  
  stopVideo() {
    if (this.isVideoPlaying == true) {
      this.videoElementRef.nativeElement.pause();
      this.isVideoPlaying = false;
    }
  }
  
  resetVideo() {
    if(this.videoElementRef) {
      console.log("reset video")
      setTimeout(() => {
        this.stopVideo();
        this.videoElementRef.nativeElement.load();
      }, 500)
    }
  }

  ngOnInit() {
    if (!this.isMobile) {
      if (typeof document !== "undefined") {
        setTimeout(() => {
          let videoBgs = [
            document.querySelectorAll("video")[1],
            document.querySelectorAll("video")[2],
            document.querySelectorAll("video")[3],
            document.querySelectorAll("video")[4]
          ];


          videoBgs.forEach(video => {
            if(video) {
              video.muted = true;
              video.play();
            }
          });
        }, 0);
      }
    }
  }
}
