import { HomeComponent } from '../../layouts/home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../login/components/signup/signup.component';
import { ClientComponent } from './client.component';

export const clientRoute = [
  {
    path: '',
    component: ClientComponent,
    title: 'Strona główna'
  }
];
