import { Component, OnInit } from '@angular/core';
import { LoginserviceService, invoice } from '../loginservice.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-invoicedata',
  templateUrl: './invoicedata.component.html',
  styleUrls: ['./invoicedata.component.css']
})
export class InvoicedataComponent implements OnInit {
  invoice: invoice[] = [];

  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getinvoice(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.invoice = data;
  }
  );

}
}
