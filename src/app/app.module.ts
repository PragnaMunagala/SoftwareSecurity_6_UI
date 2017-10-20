import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ExternalUserComponent } from './external-user/external-user.component';
import { InternalUserComponent } from './internal-user/internal-user.component';
import { StatementComponent } from './external-user/statement/statement.component';
import { AccountComponent } from './external-user/account/account.component';
import { RequestsComponent } from './external-user/requests/requests.component';
import { AuthorizeComponent } from './internal-user/authorize/authorize.component';
import { CreateAccountComponent } from './internal-user/create-account/create-account.component';
import { ViewAccountsComponent } from './internal-user/view-accounts/view-accounts.component';
import { LogFileComponent } from './internal-user/log-file/log-file.component';
import { UserProfileComponent } from './internal-user/user-profile/user-profile.component';
import {DashboardComponent} from './external-user/dashboard/dashboard.component';
import {PaymentComponent} from './external-user/payment/payment.component';
import {TransferComponent} from './external-user/transfer/transfer.component';
import {ProfileComponent} from './external-user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PaymentComponent,
    TransferComponent,
    ExternalUserComponent,
    InternalUserComponent,
    StatementComponent,
    AccountComponent,
    RequestsComponent,
    AuthorizeComponent,
    ProfileComponent,
    ViewAccountsComponent,
    CreateAccountComponent,
    LogFileComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
