import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const routes: Routes = [
  // { path: 'home', component: HomeSectionComponent },
  // { path: 'about', component: AboutSectionComponent },
  // { path: 'contact', component: ContactSectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
