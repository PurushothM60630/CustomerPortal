import { Component, OnInit } from '@angular/core';
import { LoginserviceService, inquiry } from '../loginservice.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {
  //public inquiry=[];
  inquiry: inquiry[] = [];
  constructor(private _loginservice:LoginserviceService,private router: Router) { }
  public logininfo = localStorage.getItem('custid');
  ngOnInit(): void {
    const customerid = {
      username: this.logininfo
    }
   this._loginservice.getinquirydata(customerid)
  .subscribe( data => {
      console.log('success', data );
      this.inquiry = data;
      console.log(+data[0].MATNR);
      console.log(localStorage.getItem('custid'));
      //console.log(this.logininfo);
  }  
  );
}
}   
