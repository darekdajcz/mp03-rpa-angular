import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { clientRoute } from './client.route';

@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    RouterModule.forChild(clientRoute),
    CommonModule
  ]
})
export class ClientModule { }
