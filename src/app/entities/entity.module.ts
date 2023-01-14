import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
      }, {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(module => module.ClientModule)
      }, {
        path: 'bank',
        loadChildren: () => import('./bank/bank.module').then(module => module.BankModule)
      }, {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(module => module.AccountModule)
      }, {
        path: 'info',
        loadChildren: () => import('./info/info.module').then(module => module.InfoModule)
      }
    ]),
    CommonModule
  ]
})
export class EntityModule {
}
