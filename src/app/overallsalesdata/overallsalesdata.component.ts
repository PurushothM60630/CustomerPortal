import { Component, OnInit } from '@angular/core';
import { LoginserviceService, overallsales } from '../loginservice.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OsddialogeComponent } from '../osddialoge/osddialoge.component';
@Component({
  selector: 'app-overallsalesdata',
  templateUrl: './overallsalesdata.component.html',
  styleUrls: ['./overallsalesdata.component.css']
})
export class OverallsalesdataComponent implements OnInit {
  overallsales: overallsales[] = [];
  res;
  vbelnvalue;
  cosd;
  constructor(private _loginservice:LoginserviceService,private router: Router,public dialog:MatDialog) { }
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
opendialog(VBELN){
    
  this.vbelnvalue = VBELN;
  //alert(this.ebelnvalue);
  this.res = this.overallsales.filter(it => new RegExp(VBELN).test(it.VBELN));
  //alert(JSON.stringify(this.res));
  sessionStorage.setItem("cosd",JSON.stringify(this.res));
  this.dialog.open(OsddialogeComponent);
}
}
