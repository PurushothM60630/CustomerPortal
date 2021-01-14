import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmdialoge',
  templateUrl: './cmdialoge.component.html',
  styleUrls: ['./cmdialoge.component.css']
})
export class CmdialogeComponent implements OnInit {
  ccm = sessionStorage.getItem("ccm");
  json = JSON.parse(this.ccm);
  constructor() { }

  ngOnInit(): void {
  }

}
