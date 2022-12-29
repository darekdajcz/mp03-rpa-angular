import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';

const loginRoute = [{
  path: 'login',
  component: LoginComponent,
  title: 'Logowanie'
  // resolve: {
  //
  // },
  // data: {
  //   authorities: [],
  //   pageTitle: 'Ngrx Tutorial'
  // },
  // canActivate: []
}, {
  path: 'signup',
  component: SignupComponent,
  title: 'Rejestracja'
}
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forChild(loginRoute),
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule {
}
