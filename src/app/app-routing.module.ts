import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';



const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contactUs', component: ContactUsComponent},


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
