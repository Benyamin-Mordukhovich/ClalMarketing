import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutDialogComponent } from '../aboutDialog/aboutDialog.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isHamburgerOpen: boolean = false;
  private dataAbout = {};

  constructor(public dialogAbout: MatDialog, private _dataService: DataService) { }

  clickHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  openAboutDialog(): void {

    this._dataService.getAboutData().subscribe(
      res => {
        this.dataAbout = res
        this.dialogAbout.open(AboutDialogComponent, {
          data: {
            dataAbout: this.dataAbout
          }
        });

      }
    );

  }
}
