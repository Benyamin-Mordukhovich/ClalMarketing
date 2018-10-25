import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from '../aboutDialog/aboutDialog.component';
import { DataService } from '../../../services/data.service';
import { ContactDialogComponent } from '../contactDialog/contactDialog.component';
import { DOCUMENT } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  contrastClass: string = 'contrastColors';
  focusClass: string = 'keyboardFocus';
  contrastTheme: string = '';
  focusTheme: string = '';
  isHamburgerOpen: boolean = false;

  private dataAbout = {};
  private dataContactPage = {};


  constructor(public dialog: MatDialog,
    private _dataService: DataService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.accessibilityControl();
  }

  toggleFocus() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    this.document.body.classList.toggle('keyboardFocus');
    if (this.document.body.classList.contains(this.focusClass)) {
      localStorage.setItem(this.focusClass, this.focusClass)
    }
    else {
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

  openAboutDialog(): void {

    this._dataService.getAboutData().subscribe(
      res => {
        this.dataAbout = res
        this.dialog.open(AboutDialogComponent, {
          data: {
            dataAbout: this.dataAbout
          }
        });

      }
    );

  }


  openContactDialog() {
    this._dataService.getContactData().subscribe(
      res => {
        this.dataContactPage = res

        this.dialog.open(ContactDialogComponent, {
          data: {
            dataContactPage: this.dataContactPage
          }
        });
      }
    )
  }




}
