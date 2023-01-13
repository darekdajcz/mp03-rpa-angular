import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankComponent } from './bank.component';
import { RouterModule } from '@angular/router';
import { bankRoute } from './bank.route';
import { BankTableComponent } from './components/bank-table/bank-table.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { BankEditModalComponent } from './components/bank-edit-modal/bank-edit-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BankComponent,
    BankTableComponent,
    BankEditModalComponent
  ],
    imports: [
        RouterModule.forChild(bankRoute),
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
export class BankModule { }
