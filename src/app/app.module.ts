import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentdetailComponent } from './components/paymentdetail/paymentdetail.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPaymentdetailComponent } from './components/add-paymentdetail/add-paymentdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePaymentdetailComponent } from './components/update-paymentdetail/update-paymentdetail.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentdetailComponent,
    NoPageFoundComponent,
    NavbarComponent,
    AddPaymentdetailComponent,
    UpdatePaymentdetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
