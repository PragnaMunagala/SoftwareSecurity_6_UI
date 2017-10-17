import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ExternalUserComponent} from './external-user/external-user.component';
import {InternalUserComponent} from './internal-user/internal-user.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: ExternalUserComponent},
  {path: 'account', component: ExternalUserComponent},
  {path: 'payment', component: ExternalUserComponent},
  {path: 'profile', component: ExternalUserComponent},
  {path: 'requests', component: ExternalUserComponent},
  {path: 'statement', component: ExternalUserComponent},
  {path: 'transfer', component: ExternalUserComponent},
  {path: 'accounts', component: InternalUserComponent},
  {path: 'authorize', component: InternalUserComponent},
  {path: 'log-file', component: InternalUserComponent},
  {path: 'user-profile', component: InternalUserComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true } )],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
