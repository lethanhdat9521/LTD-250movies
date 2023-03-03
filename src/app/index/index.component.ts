import { Component } from '@angular/core';
import {UsersService} from "../users.service";
import {PersonI} from "../Model/Person";
import {Route, Router} from "@angular/router";
import {PeopleService} from "../people.service";
import {item, JsonGet} from "../Model/Movie";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  public jsonGet:any;
  public movies:item[] = [];
  c:any;
  test:any
  constructor(private user:UsersService,private router:Router, private peopleService:PeopleService) {

    this.user.get250Movies().subscribe({
      next: (data =>
      {
        //console.log(data.items);
        this.jsonGet = data.items;
        console.log("Json get: " , this.jsonGet);
        this.movies = <item[]> this.jsonGet;
        console.log("Movies:", this.movies);
      }),
      error: (err: any) =>
      {
        console.log(err);
      }
    });

    console.log(this.jsonGet);
  }

  getPeople(data:PersonI){
    this.peopleService.setPerson(data);
    this.router.navigate(['peopleInfo']);
  }

}
