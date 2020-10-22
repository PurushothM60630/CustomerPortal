import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  disabledbutton : boolean = true ;
  userform:FormGroup;
  public userdetails=[];
  constructor(private _loginservice:LoginserviceService) { 
    this.userform = new FormGroup({
      "Name" : new FormControl(),
      "CustomerID" : new FormControl(),
      "Address" : new FormControl(),
      "City" : new FormControl(),
      "State" : new FormControl(),
      "Country" : new FormControl(),
      "Pincode" : new FormControl(),
      "Phonenumber" : new FormControl(),
      "Fax" : new FormControl(),
    })
  }
  public logininfo = localStorage.getItem('custid');
   enableformgroup(){
   this.userform.enable();
   }
   disableformgroup(){
     this.userform.disable();
     const profileupdatePayload = {
      name: this.userform.controls['Name'].value,
      customerid : this.userform.controls['CustomerID'].value,
      address : this.userform.controls['Address'].value,
      city : this.userform.controls['City'].value,
      state : this.userform.controls['State'].value,
      country : this.userform.controls['Country'].value,
      pincode : this.userform.controls['Pincode'].value,
      contact : this.userform.controls['Phonenumber'].value,
      fax : this.userform.controls['Fax'].value,

    }
    this._loginservice.getprofileupdate(profileupdatePayload)
    .subscribe( data => {
       this.userdetails = data;
       console.log(data);
      this.userform.controls['Name'].setValue(data["Name"]),
      this.userform.controls['CustomerID'].setValue(data["CustomerID"]),
      this.userform.controls['Address'].setValue(data["Address"]),
      this.userform.controls['City'].setValue(data["City"]),
      this.userform.controls['State'].setValue(data["State"]),
      this.userform.controls['Country'].setValue(data["Country"]),
      this.userform.controls['Pincode'].setValue(data["Pincode"]),
      this.userform.controls['Phonenumber'].setValue(data["Phonenumber"]),
      this.userform.controls['Fax'].setValue(data["Fax"])
    }
      );
      alert("Updated to sap database!");
   }

  ngOnInit(): void {
    this.userform.disable();
    const customerid = {
      username: this.logininfo
    }
        this._loginservice.getuserformdata(customerid)
    .subscribe(data =>{
      this.userdetails = data;
      console.log(data);
      console.log(data["Name"]);
      this.userform.controls['Name'].setValue(data["Name"]),
      this.userform.controls['CustomerID'].setValue(data["CustomerID"]),
      this.userform.controls['Address'].setValue(data["Address"]),
      this.userform.controls['City'].setValue(data["City"]),
      this.userform.controls['State'].setValue(data["State"]),
      this.userform.controls['Country'].setValue(data["Country"]),
      this.userform.controls['Pincode'].setValue(data["Pincode"]),
      this.userform.controls['Phonenumber'].setValue(data["Phonenumber"]),
      this.userform.controls['Fax'].setValue(data["Fax"])
    }  );
}


}
