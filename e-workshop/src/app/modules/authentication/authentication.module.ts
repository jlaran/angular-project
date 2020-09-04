import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegistrationClientComponent } from './registration-client/registration-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, RegistrationClientComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
