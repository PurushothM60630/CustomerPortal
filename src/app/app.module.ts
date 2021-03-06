import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InquirydataComponent } from './inquirydata/inquirydata.component';
import { SaleorderdataComponent } from './saleorderdata/saleorderdata.component';
import { ListofdataComponent } from './listofdata/listofdata.component';
import { InvoicedataComponent } from './invoicedata/invoicedata.component';
import { PaymentsandagingComponent } from './paymentsandaging/paymentsandaging.component';
import { CreditmemoComponent } from './creditmemo/creditmemo.component';
import { OverallsalesdataComponent } from './overallsalesdata/overallsalesdata.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './interceptor.service';
import { NgxPrintModule } from 'ngx-print';
import { MatDialogModule } from '@angular/material/dialog';
import { SoddialogeComponent } from './soddialoge/soddialoge.component';
import { InvdialogeComponent } from './invdialoge/invdialoge.component';
import { CmdialogeComponent } from './cmdialoge/cmdialoge.component';
import { OsddialogeComponent } from './osddialoge/osddialoge.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EditprofileComponent,
    SaleorderdataComponent,
    InquirydataComponent,
    ListofdataComponent,
    InvoicedataComponent,
    PaymentsandagingComponent,
    CreditmemoComponent,
    OverallsalesdataComponent,
    DashboardComponent,
    SoddialogeComponent,
    InvdialogeComponent,
    CmdialogeComponent,
    OsddialogeComponent
  ],
  entryComponents :[SoddialogeComponent,InvdialogeComponent,CmdialogeComponent,OsddialogeComponent],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    MatMenuModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    WavesModule,
    MatProgressBarModule,
    NgxPrintModule,
    MatDialogModule
   
    


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
