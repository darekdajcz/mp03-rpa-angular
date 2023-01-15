import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { BankModel } from '../../model/bank.model';

@Component({
  selector: 'app-bank-table',
  templateUrl: './bank-table.component.html',
  styleUrls: ['./bank-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankTableComponent {
  _banks: BankModel[];
  @Input() canEdit: boolean;

  @Input() set banks(value: BankModel[]) {
    this._banks = value;
  };

  get banks(): BankModel[] {
    return this._banks;
  }

  @Output() updateBankEmitter = new EventEmitter<BankModel>();
  @Output() deleteBankEmitter = new EventEmitter<number>();
  @Output() detailsBankEmitter = new EventEmitter<BankModel>();

  updateClient(bank: BankModel): void {
    this.updateBankEmitter.emit(bank);
  }

  deleteClient(id: number): void {
    this.deleteBankEmitter.emit(id);
  }

  detailsClient(bank: BankModel): void {
    this.detailsBankEmitter.emit(bank);
  }
}
