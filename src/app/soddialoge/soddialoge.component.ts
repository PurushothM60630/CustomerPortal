import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soddialoge',
  templateUrl: './soddialoge.component.html',
  styleUrls: ['./soddialoge.component.css']
})
export class SoddialogeComponent implements OnInit {
  csod = sessionStorage.getItem("csod");
  json = JSON.parse(this.csod);
  constructor() { }

  ngOnInit(): void {
  }

}
