import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { PaymentdetailComponent } from './components/paymentdetail/paymentdetail.component';
import { UpdatePaymentdetailComponent } from './components/update-paymentdetail/update-paymentdetail.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: PaymentdetailComponent},
  {path:'update/:id', component: UpdatePaymentdetailComponent},
  {path:'**', component: NoPageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
