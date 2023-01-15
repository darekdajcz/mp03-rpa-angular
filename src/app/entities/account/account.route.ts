import { AccountComponent } from './account.component';
import { Routes } from '@angular/router';

export const accountRoute: Routes= [
  {
    path: '',
    component: AccountComponent,
    title: 'Strona główna',
  }
];
