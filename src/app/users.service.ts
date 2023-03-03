import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PersonI} from "./Model/Person";
import {JsonGet,item} from "./Model/Movie";
import {Observable, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  jsonGet:JsonGet = {items : [],errorMessage : ''}
  constructor(private http:HttpClient) { }
  get250Movies():Observable<JsonGet>{
    let url123 = 'https://imdb-api.com/en/API/Top250Movies/k_dm5q92ce';
    let c = this.http.get<JsonGet>(url123);
    console.warn(c)
    return c;
  }
  getPeople(id:number){
    let url123 = 'https://jsonplaceholder.typicode.com/todos/'+id
  }
}
