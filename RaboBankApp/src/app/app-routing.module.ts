import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaboLoginComponent } from './rabo-screens/rabo-login/rabo-login.component';
import { RaboHomeComponent } from './rabo-screens/rabo-home/rabo-home.component';
import { RaboTransactionsComponent } from './rabo-screens/rabo-transactions/rabo-transactions.component';
import { RaboPageNotFoundComponent } from './common-ui/rabo-page-not-found/rabo-page-not-found.component';
import { RaboAuthGuardService } from './rabo-services/rabo-authguard-service/rabo-authguard-service.service';

const routes: Routes = [
  { path: 'login', component: RaboLoginComponent },
  { path: 'home', component: RaboHomeComponent ,canActivate: [RaboAuthGuardService]},
  { path: 'transactions', component: RaboTransactionsComponent,canActivate: [RaboAuthGuardService]},
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '**', component: RaboPageNotFoundComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
