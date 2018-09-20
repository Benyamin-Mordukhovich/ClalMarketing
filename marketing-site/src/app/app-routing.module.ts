import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HpComponent } from './marketing/containers/hp/hp.component';
import { FaqComponent } from './marketing/containers/faq/faq.component';

const routes: Routes = [
  { path: '', component: HpComponent },
  { path: 'faq', component: FaqComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
