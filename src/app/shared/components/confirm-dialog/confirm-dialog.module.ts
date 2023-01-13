import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        TranslateModule
    ]
})
export class ConfirmDialogModule { }
