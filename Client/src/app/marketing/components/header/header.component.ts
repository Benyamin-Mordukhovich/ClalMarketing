import { Component, Inject, OnInit, PLATFORM_ID } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DOCUMENT } from "@angular/platform-browser";
import { isPlatformServer } from "@angular/common";
import { ModalService } from "../../../services/modal.service";
import { DataService } from "../../../services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  contrastClass: string = "contrastColors";
  focusClass: string = "keyboardFocus";
  contrastTheme: string = "";
  focusTheme: string = "";
  isHamburgerOpen: boolean = false;

  headerData = {};
  polisaBtn = {};

  activeLink: string = 'faq';

  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId,
    private modalService: ModalService,
    private _dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._dataService.layoutData.subscribe(data => {
      this.headerData = data.header;
      this.polisaBtn = data.header.polisaBtn;
    });
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.accessibilityControl();

    this.activatedRoute.queryParams.subscribe(qs => {
      switch(qs.modal) {
        case "about":
          this.activeLink = 'about';
          break;
        case "contact":
          this.activeLink = 'contact';
          break;
        default:
          this.activeLink = 'faq';
      }
  })
  }

  toggleFocus() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.document.body.classList.toggle("keyboardFocus");
    if (this.document.body.classList.contains(this.focusClass)) {
      localStorage.setItem(this.focusClass, this.focusClass);
    } else {
      localStorage.removeItem(this.focusClass);
    }
  }

  accessibilityControl() {
    this.focusTheme = localStorage.getItem(this.focusClass);

    if (this.focusTheme != null) {
      this.document.body.classList.add(this.focusClass);
    }
  }

  clickHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  // openAboutDialog(e: Event): void {
  //   e.preventDefault();
  //   this.modalService.openAboutDialog();
  // }

  openContactDialog(e: Event): void {
    e.preventDefault();
    this.modalService.openContactDialog();
  }
}
