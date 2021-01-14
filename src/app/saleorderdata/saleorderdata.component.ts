import { Component, OnInit } from '@angular/core';
import { LoginserviceService, saleorder } from '../loginservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SoddialogeComponent } from '../soddialoge/soddialoge.component';
@Component({
  selector: 'app-saleorderdata',
  templateUrl: './saleorderdata.component.html',
  styleUrls: ['./saleorderdata.component.css']
})
export class SaleorderdataComponent implements OnInit {
  saleorder: saleorder[] = [];
  res;
  vbelnvalue;
  csod;
  constructor(private _loginservice:LoginserviceService,private router: Router,public dialog:MatDialog) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getsaleorderdata(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.saleorder = data;
      //this.json = JSON.stringify(this.saleorder);
  }
  );
}
opendialog(VBELN){
    
  this.vbelnvalue = VBELN;
  //alert(this.ebelnvalue);
  this.res = this.saleorder.filter(it => new RegExp(VBELN).test(it.VBELN));
  //alert(JSON.stringify(this.res));
  sessionStorage.setItem("csod",JSON.stringify(this.res));
  this.dialog.open(SoddialogeComponent);
}
}
