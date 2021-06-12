import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmodRoutingModule } from './authmod-routing.module';
import { AuthmodComponent } from './authmod.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AuthmodComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthmodRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  exports:[
    UserLoginComponent
  ]
})
export class AuthmodModule { }
