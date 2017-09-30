import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PaymentComponent} from './payment/payment.component';
import {TransferComponent} from './transfer/transfer.component';
import {BankStatementComponent} from './bank-statement/bank-statement.component';
import {LoginComponent} from './login/login.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'transfer', component: TransferComponent},
  {path: 'bank-statement', component: BankStatementComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true } )],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
