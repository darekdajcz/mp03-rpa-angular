import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      navbarRoute
    ], { enableTracing: false }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
