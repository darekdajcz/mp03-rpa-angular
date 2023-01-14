import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import locales from '@angular/common/locales/pl';
import { fontAwesomeIco } from './font-awesome-icons/font-awesome-icons';
import { AproovePipe } from './pipes/aproove.pipe';
import { ConfirmDialogModule } from './components/confirm-dialog/confirm-dialog.module';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';

@NgModule({
  declarations: [
    AproovePipe,
    AlertMessagesComponent
  ],
  exports: [
    AproovePipe
  ],
  imports: [
    CommonModule,
    ConfirmDialogModule
  ]
})
export class SharedModule {
  constructor(fontAwesomeLib: FaIconLibrary) {
    registerLocaleData(locales);
    fontAwesomeLib.addIcons(...fontAwesomeIco);
  }
}
