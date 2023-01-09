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
import { SignupComponent } from './components/signup/signup.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from '../../layouts/home/home.component';
import { loginRoute } from './login.route';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent
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
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class LoginModule {
}
