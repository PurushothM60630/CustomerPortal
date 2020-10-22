import { Component, OnInit } from '@angular/core';
import { LoginserviceService, creditmemo } from '../loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditmemo',
  templateUrl: './creditmemo.component.html',
  styleUrls: ['./creditmemo.component.css']
})
export class CreditmemoComponent implements OnInit {
  creditmemo : creditmemo[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getcreditmemo(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.creditmemo = data;
  }  
  );

  }

}
