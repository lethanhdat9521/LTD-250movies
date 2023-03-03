import { Component } from '@angular/core';
import {PeopleService} from "../people.service";
import {PersonI} from "../Model/Person";

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.css']
})
export class PeopleInfoComponent {

  p1:PersonI = {id :0, completed : false,title:"",userId:0}
  constructor(private peopleService:PeopleService) {
    this.p1 = peopleService.getPerson();
  }
}
