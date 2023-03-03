import { Injectable } from '@angular/core';
import {PersonI} from "./Model/Person";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }
  p1:PersonI = {id :0, completed : false,title:"",userId:0}


  setPerson(data:PersonI){
    this.p1 = data;
  }
  getPerson(){
    return this.p1;
  }

}
