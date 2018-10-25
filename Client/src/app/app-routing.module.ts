import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HpComponent } from './marketing/containers/hp/hp.component';
import { FaqComponent } from './marketing/containers/faq/faq.component';
import { ErrorPageComponent } from './marketing/containers/errorPage/errorPage.component';
import { ContactDialogComponent } from './marketing/components/contactDialog/contactDialog.component';
import { AboutDialogComponent } from './marketing/components/aboutDialog/aboutDialog.component';

const routes: Routes = [
  { path: '', component: HpComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutDialogComponent , outlet: 'modal'},
  { path: '**', component: ErrorPageComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
