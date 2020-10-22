import { Component, OnInit } from '@angular/core';
import { LoginserviceService, listofdel } from '../loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listofdata',
  templateUrl: './listofdata.component.html',
  styleUrls: ['./listofdata.component.css']
})
export class ListofdataComponent implements OnInit {
  listofdel: listofdel[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
    this._loginservice.getlistofdel(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.listofdel = data;
  }
  );
}
}
