import { Component, OnInit } from '@angular/core';
import { LoginserviceService, creditmemo } from '../loginservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CmdialogeComponent } from '../cmdialoge/cmdialoge.component';
@Component({
  selector: 'app-creditmemo',
  templateUrl: './creditmemo.component.html',
  styleUrls: ['./creditmemo.component.css']
})
export class CreditmemoComponent implements OnInit {
  creditmemo : creditmemo[] = [];
  res;
  vbelnvalue;
  ccm;
  constructor(private _loginservice:LoginserviceService,private router: Router,public dialog:MatDialog) { }
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
  opendialog(VBELN){
    
    this.vbelnvalue = VBELN;
    //alert(this.ebelnvalue);
    this.res = this.creditmemo.filter(it => new RegExp(VBELN).test(it.VBELN));
    //alert(JSON.stringify(this.res));
    sessionStorage.setItem("ccm",JSON.stringify(this.res));
    this.dialog.open(CmdialogeComponent);
  }
  
}
