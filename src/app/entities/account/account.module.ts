import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { accountRoute } from './account.route';
import { AccountTableComponent } from './components/client-table/account-table.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { AccountEditModalComponent } from './components/account-edit-modal/account-edit-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AccountComponent,
    AccountTableComponent,
    AccountEditModalComponent
  ],
    imports: [
        RouterModule.forChild(accountRoute),
        CommonModule,
        MatButtonModule,
        SharedModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslateModule
    ]
})
export class AccountModule { }
