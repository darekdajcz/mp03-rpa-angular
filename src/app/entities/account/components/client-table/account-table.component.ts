import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { AccountModel } from '../../model/account.model';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTableComponent {
  _accounts: AccountModel[];
  @Input() set accounts(value: AccountModel[]) {
    this._accounts = value;
  };

  get banks(): AccountModel[] {
    return this._accounts;
  }

  @Output() updateAccountEmitter = new EventEmitter<AccountModel>();
  @Output() deleteAccountEmitter = new EventEmitter<number>();
  @Output() detailsAccountEmitter = new EventEmitter<AccountModel>();

  updateClient(bank: AccountModel): void {
    this.updateAccountEmitter.emit(bank);
  }

  deleteClient(id: number): void {
    this.deleteAccountEmitter.emit(id);
  }

  detailsClient(bank: AccountModel): void {
    this.detailsAccountEmitter.emit(bank);
  }
}
