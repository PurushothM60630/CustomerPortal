import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osddialoge',
  templateUrl: './osddialoge.component.html',
  styleUrls: ['./osddialoge.component.css']
})
export class OsddialogeComponent implements OnInit {
  cosd = sessionStorage.getItem("cosd");
  json = JSON.parse(this.cosd);
  
  constructor() { }

  ngOnInit(): void {
  }

}
