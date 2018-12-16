import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HpComponent } from "./marketing/containers/hp/hp.component";
import { FaqComponent } from "./marketing/containers/faq/faq.component";
import { ErrorPageComponent } from "./marketing/containers/errorPage/errorPage.component";
import { AboutComponent } from "./marketing/components/about/about.component";
import { ContactComponent } from "./marketing/components/contact/contact.component";
import { OfferComponent } from "./marketing/components/offer/offer.component";
import { DialogHpComponent } from "./marketing/components/dialogHp/dialogHp.component";

const routes: Routes = [
  { path: "", component: HpComponent },
  { path: "faq", component: FaqComponent },
  { path: "about", component: AboutComponent },
  { path: "contact",component: ContactComponent },
  { path: "offer" , component: OfferComponent},
  { path: "popupSection/:id" , component: DialogHpComponent},
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
