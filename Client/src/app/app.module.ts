import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { HpComponent } from './marketing/containers/hp/hp.component';
import { FaqComponent } from './marketing/containers/faq/faq.component';
import { ErrorPageComponent } from './marketing/containers/errorPage/errorPage.component';
import { HeaderComponent } from './marketing/components/header/header.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { AboutDialogComponent } from './marketing/components/aboutDialog/aboutDialog.component';
import { ContactDialogComponent } from './marketing/components/contactDialog/contactDialog.component';
import { SectionInfoDialogComponent } from './marketing/components/sectionInfoDialog/sectionInfoDialog.component';
import { OfferDialogComponent } from './marketing/components/offerDialog/offerDialog.component';
import { SectionInfoComponent } from './marketing/components/sectionInfo/sectionInfo.component';
import { FooterComponent } from './marketing/components/footer/footer.component';
import { SlickComponent } from './marketing/components/slick/slick.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';
import { SlickModule } from 'ngx-slick';

import { FaqModelComponent } from './marketing/components/faqModel/faqModel.component';
import { TransitionSlideDirective } from './directives/transition-slide.directive';
import { ModalService } from './services/modal.service';
import { AboutComponent } from './marketing/components/about/about.component';
import { DialogHpComponent } from './marketing/components/dialogHp/dialogHp.component';
import { ContactComponent } from './marketing/components/contact/contact.component';
import { OfferComponent } from './marketing/components/offer/offer.component';
export const MATERIALCOMPONENTS = [
  MatExpansionModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule
]

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HpComponent,
    FaqComponent,
    ErrorPageComponent,
    HeaderComponent,
    // AboutDialogComponent,
    ContactDialogComponent,
    OfferDialogComponent,
    FaqModelComponent,
    SectionInfoComponent,
    FooterComponent,
    TransitionSlideDirective,
    SlickComponent,
    AboutComponent,
    ContactComponent,
    OfferComponent,
    SectionInfoDialogComponent,
    DialogHpComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'clalMarketing'}),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MATERIALCOMPONENTS,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserTransferStateModule,
    SlickModule.forRoot()
  ],
  entryComponents:[
    // AboutDialogComponent,
    ContactDialogComponent,
    OfferDialogComponent,
    AboutComponent,
    ContactComponent,
    OfferComponent,
    SectionInfoDialogComponent,
    DialogHpComponent
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
export class AppModule { 

  constructor(modalService:ModalService) {
    const isServer = typeof(window) === "undefined";
    if(!isServer) {
      modalService.listen() 
    }
  }

}
