import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { CustomerLoginComponent } from '../app/customer-login/customer-login.component';
import { MasterLayoutComponent } from '../app/shared/master-layout/master-layout.component';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component';
import { CustomerSessionsComponent } from '../app/customer-sessions/customer-sessions.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'customerLogin', pathMatch: 'full'
  },
  {
    path: 'customerLogin', component: CustomerLoginComponent
  },
  {
    path: 'forgotPassword/:id', component: ForgotPasswordComponent
  },
  {
    path: '',
    component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'customerSession', component: CustomerSessionsComponent
      },   
      {
        path: 'feedback', component: CustomerFeedbackComponent
      },
      { path: '**', component: PageNotFoundComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
