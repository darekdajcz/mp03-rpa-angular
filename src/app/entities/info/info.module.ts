import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';
import { infoRoute } from './infoRoute';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(infoRoute),
    TranslateModule,
    SharedModule,
    MatButtonModule
  ]
})
export class InfoModule { }
