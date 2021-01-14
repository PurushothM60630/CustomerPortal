import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invdialoge',
  templateUrl: './invdialoge.component.html',
  styleUrls: ['./invdialoge.component.css']
})
export class InvdialogeComponent implements OnInit {
  cinv = sessionStorage.getItem("cinv");
  json = JSON.parse(this.cinv);
  
  constructor() { }

  ngOnInit(): void {
  }

}
