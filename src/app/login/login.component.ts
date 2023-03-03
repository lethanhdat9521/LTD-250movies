import { Component } from '@angular/core';
import {UsersService} from "../users.service";
import {PersonI} from "../Model/Person";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data:any;
  p1:PersonI = {id :0, completed : false,title:"",userId:0}
  constructor(private user:UsersService,private router:Router) {
  }
  // login(account:string, password:string){
  //   this.user.getPeoples().subscribe(dat => this.p1 = dat);
  //   console.warn(this.p1.title)
  //   this.router.navigate(['signup'])
  // }
}
