import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { HpComponent } from './marketing/containers/hp/hp.component';
import { FaqComponent } from './marketing/containers/faq/faq.component';
import { HeaderComponent } from './marketing/components/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutDialogComponent } from './marketing/components/aboutDialog/aboutDialog.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';

import { FaqModelComponent } from './marketing/components/faqModel/faqModel.component';
export const MATERIALCOMPONENTS = [
  MatExpansionModule,
  MatDialogModule
]

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HpComponent,
    FaqComponent,
    HeaderComponent,
    AboutDialogComponent,
    FaqModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIALCOMPONENTS,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule
  ],
  entryComponents:[
    AboutDialogComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
