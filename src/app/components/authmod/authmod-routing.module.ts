import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthmodComponent } from './authmod.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [{ path: '', component: AuthmodComponent },
{ path: 'login', component: UserLoginComponent },
{ path: 'register', component: UserRegisterComponent },
{ path: 'profile', component: UserProfileComponent },
{ path: 'reset', component: ResetPasswordComponent },
{ path: 'forget-password', component: ForgetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthmodRoutingModule { }
