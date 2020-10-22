import { Component, OnInit } from '@angular/core';
import { LoginserviceService, overallsales } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overallsalesdata',
  templateUrl: './overallsalesdata.component.html',
  styleUrls: ['./overallsalesdata.component.css']
})
export class OverallsalesdataComponent implements OnInit {
  overallsales: overallsales[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getoverallsales(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.overallsales = data;
  }  
  );
}
}
