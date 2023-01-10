import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import locales from '@angular/common/locales/pl';
import { fontAwesomeIco } from './font-awesome-icons/font-awesome-icons';
import { CanGetLoanPipe } from './pipes/can-get-loan.pipe';

@NgModule({
  declarations: [
    CanGetLoanPipe
  ],
  exports: [
    CanGetLoanPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  constructor(fontAwesomeLib: FaIconLibrary) {
    registerLocaleData(locales);
    fontAwesomeLib.addIcons(...fontAwesomeIco);
  }
}
