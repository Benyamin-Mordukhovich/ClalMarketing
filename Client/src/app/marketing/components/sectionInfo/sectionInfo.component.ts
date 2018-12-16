import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: "app-sectionInfo",
  templateUrl: "./sectionInfo.component.html"
})
export class SectionInfoComponent implements OnInit {
  @Input() infoObj;
  @Input() isMobile;
  @Output() openPopup = new EventEmitter();

  @Input()
  set layerIndex(layerIndex: number) {
    if(layerIndex == 1) {
      this.resetVideo();
    }
  }
  
  @ViewChild("videoRef") videoElementRef: ElementRef;
  
  isVideoPlaying: boolean = false;
  constructor(private modalService:ModalService) { }
  
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
      setTimeout(() => {
        this.stopVideo();
        this.videoElementRef.nativeElement.load();
      }, 500)
    }
  }

  openDialog(linkPath){
    let path = linkPath.split('/').filter(Boolean);
    let param = path[path.length - 1];
    console.log('param',param)

    this.modalService.openSectionInfoDialog(param);
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
