import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { SaleorderdataComponent } from './saleorderdata/saleorderdata.component';
import { ListofdataComponent } from './listofdata/listofdata.component';
import { InvoicedataComponent } from './invoicedata/invoicedata.component';
import { PaymentsandagingComponent } from './paymentsandaging/paymentsandaging.component';
import { CreditmemoComponent } from './creditmemo/creditmemo.component';
import { OverallsalesdataComponent } from './overallsalesdata/overallsalesdata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'home', component:LoginComponent},
  {path:'navbar',
   component:NavbarComponent,
   children:[
    { path:'editprofile', 
      component:EditprofileComponent
    },
    { path:'inquirydata', 
      component:InquirydataComponent
    },
    { path:'saleorderdata', 
      component:SaleorderdataComponent
    },
    { path:'listofdata', 
      component:ListofdataComponent
    },
    { path:'Invoicedetails', 
      component:InvoicedataComponent
    },
    { path:'paymentsandaging', 
      component:PaymentsandagingComponent
    },
    { path:'creditmemo', 
      component:CreditmemoComponent
    },
    { path:'overallsalesdata', 
      component:OverallsalesdataComponent
    },
    { path:'Dashboard', 
      component:DashboardComponent
    },
   ]
  },
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
