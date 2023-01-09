import { HomeComponent } from '../../layouts/home/home.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './components/signup/signup.component';

export const loginRoute = [
  {
    path: '',
    component: HomeComponent,
    title: 'Strona główna'
  },
  {
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
    path: 'sign-up',
    component: SignupComponent,
    title: 'Rejestracja'
  }
];
