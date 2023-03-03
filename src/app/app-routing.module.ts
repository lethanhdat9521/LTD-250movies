import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component"
import {IndexComponent} from "./index/index.component";
import {PeopleInfoComponent} from "./people-info/people-info.component";

const routes: Routes = [
  { component:AboutComponent,
  path:'about/:id'},
  {component:IndexComponent,
  path:''},
  {component:SignupComponent,
  path:'signup'},
  {component:PeopleInfoComponent,
  path:'peopleInfo'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
