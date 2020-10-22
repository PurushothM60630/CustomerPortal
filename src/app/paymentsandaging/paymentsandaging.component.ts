import { Component, OnInit } from '@angular/core';
import { payment } from '../loginservice.service';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-paymentsandaging',
  templateUrl: './paymentsandaging.component.html',
  styleUrls: ['./paymentsandaging.component.css']
})
export class PaymentsandagingComponent implements OnInit {
  payment: payment[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');

  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getpayment(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.payment = data;
    
  }
  );

}
}
