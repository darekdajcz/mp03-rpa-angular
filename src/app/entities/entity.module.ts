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
      }]),
    CommonModule
  ]
})
export class EntityModule { }
