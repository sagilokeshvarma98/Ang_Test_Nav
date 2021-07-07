import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Contact',component:ContactComponent},
  {path:'About',component:AboutComponent},
  {path:'Signin',component:SigninComponent},
  {path:'',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
