import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
export interface logindata {

  username: string,
  password: string
}
export interface userform {

  Name: string,
  CustomerID: string,
  Address: string,
  City: String,
  State: string,
  Country: string,
  Pincode : string,
  Phonenumber : string,
  Fax : string
}
export interface inquiry {

  VBELN: string,
  POSNR: string,
  MATNR: string,
 // POSAR: string,
 // ERNAM: string,
  ERDAT: string,
  WAERK: string,
 // VSTEL: string,
  ERZET: string,
  AUDAT: string,
  AUART: string,
  NETWR: string,
  PRSOK: string
}
export interface saleorder {
  VBELN :string,
  AUDAT :string,             
  ARKTX :string,
  AUART :string,
  VSBED :string,          
  KUNAG :string,
  BUKRS_VF :string,
  MATNR :string,
  MATWA :string,
  MATKL :string,
  POSAR :string,
  NETWR :string,
  NETPR :string
}
export interface listofdel {
  VBELN :string,
  ERNAM :string,
  ERZET :string,
  ERDAT :string
  LDDAT :string,
  WADAT :string,
  LFDAT :string
  KODAT :string,
  INCO1 :string,
  INCO2 :string,
  POSNR :string,
  MATNR :string
  MATWA :string,
  MTART :string
}
export interface invoice {
  KUNNR :string,
  VBELN :string,
  AUART :string,
  BUKRS_VF :string,
  VKORG :string,
  VTWEG :string,
  FKDAT :string,
  ERZET :string,
  ERDAT :string,
  WAERK :string,
  NETWR :string
}
export interface payment {
  KUNNR : string,
  BUDAT : string,
  VBELN : string,
  BUKRS : string,
  BELNR : string,
  XBLNR : string,
  BLART : string,
  SHKZG : string,
  POSN2 : string,
  GSBER : string,
  ZFBDT : string,
  ZTERM : string,
  DMBTR : string
}

export interface creditmemo {
  KUNNR : string,
  VBELN : string,
  FKTYP : string,
  POSNV : string,
  ERZET : string,
  MATNR : string,
  MEINS : string,
  PLART : string,
  WAERS : string,
  FPLNR : string
}
export interface overallsales {
  VBELN : string,
  ERNAM : string,
  ERDAT : string,
  KUNNR : string,
  VBTYP : string,
  ERZET : string,
 // BNDDT : string,
 // ANGDT : string,
  POSNR : string,
  MATNR : string,
  ARKTX : string,
  VKORG : string,
  VTWEG : string,
  SPART : string,
 // VKGRP : string,
 // VKBUR : string,
  WAERK : string,
  NETWR : string,
  NETPR : string
}
@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {

  private url: string = "http://localhost:8080/";
 
  constructor(private http: HttpClient) { }

  postlogindata(loginPayload): Observable<logindata[]> {
    return this.http.post<logindata[]>( 'http://localhost:8080/' + 'login' , loginPayload );
  } 
  getuserformdata(customerid): Observable<userform[]> {
    return this.http.post<userform[]>( 'http://localhost:8080/' + 'profile' , customerid);
   }
  getprofileupdate(profileupdatePayload): Observable<userform[]> {
    return this.http.post<userform[]>( 'http://localhost:8080/' + 'profileupdate' , profileupdatePayload );
  }

  getinquirydata(customerid): Observable<inquiry[]> {
    console.log(customerid);
    return this.http.post<inquiry[]>( 'http://localhost:8080/' + 'inquiry' , customerid);
  }  
  getsaleorderdata(customerid): Observable<saleorder[]> {
    return this.http.post<saleorder[]>('http://localhost:8080/' + 'saleorder' , customerid);
  }
  getlistofdel(customerid): Observable<listofdel[]> {
    return this.http.post<listofdel[]>('http://localhost:8080/' + 'listofdelivery' , customerid);
  }
  getinvoice(customerid): Observable<invoice[]> {
    return this.http.post<invoice[]>('http://localhost:8080/' + 'invoice' , customerid);
  }
  getpayment(customerid): Observable<payment[]> {
    return this.http.post<payment[]>('http://localhost:8080/' + 'payment' , customerid);
  }
  getcreditmemo(customerid): Observable<creditmemo[]> {
    return this.http.post<creditmemo[]>('http://localhost:8080/' + 'creditmemo' , customerid);
  }
  getoverallsales(customerid): Observable<overallsales[]> {
    return this.http.post<overallsales[]>('http://localhost:8080/' + 'overallsalesdata' , customerid)
  }
}          
   