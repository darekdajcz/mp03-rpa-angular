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
  styleUrls: ['../../../bank/components/bank-table/bank-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountTableComponent {
  _accounts: AccountModel[];
  @Input() canEdit: boolean;

  @Input() set accounts(value: AccountModel[]) {
    this._accounts = value;
  };

  get accounts(): AccountModel[] {
    return this._accounts;
  }

  @Output() updateAccountEmitter = new EventEmitter<AccountModel>();
  @Output() deleteAccountEmitter = new EventEmitter<number>();
  @Output() detailsAccountEmitter = new EventEmitter<AccountModel>();

  updateClient(accounts: AccountModel): void {
    this.updateAccountEmitter.emit(accounts);
  }

  deleteClient(id: number): void {
    this.deleteAccountEmitter.emit(id);
  }

  detailsClient(accounts: AccountModel): void {
    this.detailsAccountEmitter.emit(accounts);
  }
}
