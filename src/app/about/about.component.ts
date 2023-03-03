import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route:ActivatedRoute) {

  }
  ngOnInit():void{
    console.warn("User id is", this.route.snapshot.paramMap.get('id'))
  }
}
