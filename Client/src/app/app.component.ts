import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  title = 'marketing-site';

  isBrowser = typeof(window) !== "undefined"



}