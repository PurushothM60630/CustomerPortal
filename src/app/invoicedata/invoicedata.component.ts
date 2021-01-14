import { Component, OnInit } from '@angular/core';
import { LoginserviceService, invoice } from '../loginservice.service';
import { Router } from '@angular/router'; 
import { InvdialogeComponent } from '../invdialoge/invdialoge.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-invoicedata',
  templateUrl: './invoicedata.component.html',
  styleUrls: ['./invoicedata.component.css']
})
export class InvoicedataComponent implements OnInit {
  invoice: invoice[] = [];
  res;
  vbelnvalue;
  cinv;
  constructor(private _loginservice:LoginserviceService,private router: Router,public dialog:MatDialog) { }
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
opendialog(VBELN){
    
  this.vbelnvalue = VBELN;
  //alert(this.ebelnvalue);
  this.res = this.invoice.filter(it => new RegExp(VBELN).test(it.VBELN));
  //alert(JSON.stringify(this.res));
  sessionStorage.setItem("cinv",JSON.stringify(this.res));
  this.dialog.open(InvdialogeComponent);
}

}
