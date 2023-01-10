import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { clientRoute } from './client.route';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { ClientEditModalComponent } from './components/client-edit-modal/client-edit-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

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
    SharedModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
