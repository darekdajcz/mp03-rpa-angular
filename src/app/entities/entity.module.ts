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
      }
    ]),
    CommonModule
  ]
})
export class EntityModule {
}
