import { Component, OnInit } from '@angular/core';
import { LoginserviceService, saleorder } from '../loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-saleorderdata',
  templateUrl: './saleorderdata.component.html',
  styleUrls: ['./saleorderdata.component.css']
})
export class SaleorderdataComponent implements OnInit {
  saleorder: saleorder[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getsaleorderdata(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.saleorder = data;

  }
  );
}
}
