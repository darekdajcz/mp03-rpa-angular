import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { clientRoute } from './client.route';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { ClientEditModalComponent } from './components/client-edit-modal/client-edit-modal.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientTableComponent,
    ClientEditModalComponent
  ],
  imports: [
    RouterModule.forChild(clientRoute),
    CommonModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ClientModule { }
