import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { filter, finalize, Observable, take } from 'rxjs';
import { AccountModel } from './model/account.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountEditModalComponent } from './components/account-edit-modal/account-edit-modal.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { EditedResponse } from '../client/model/edit-response.model';

@Component({
  templateUrl: './account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  accounts: AccountModel[];

  constructor(private readonly accountService: AccountService, private readonly cdRef: ChangeDetectorRef,
              private readonly modal: NgbModal) {
  }

  ngOnInit(): void {
    this.initAccounts();
  }

  updateAccount(account?: AccountModel): void {
    this.editModal(account);
  }

  editModal(account?: AccountModel, details = false): void {
    const modal = AccountEditModalComponent.open(this.modal, account, details);

    modal.closed
      .pipe(take(1),
        filter((res) => !!res))
      .subscribe({ next: ({ account }) => this.saveAccount(account) });
  }


  deleteAccount($event: number) {

    const deleteId = $event;

    const modal = ConfirmDialogComponent.open(this.modal, 'cancel.account');

    modal.closed
      .pipe(take(1),
        filter((res) => res))
      .subscribe({ next: () => this.confirmDeleteAccount(deleteId) });
  }

  detailsAccount(account: AccountModel) {
    this.editModal(account, true);
  }

  private confirmDeleteAccount(id: number) {
    this.accountService.deleteAccount(id)
      .pipe(filter((res) => res.deleted))
      .subscribe({
        next: () => this.initAccounts()
      });
  }

  private saveAccount(req: AccountModel): void {
    let observable: Observable<Partial<EditedResponse>> = req.id ? this.accountService.updateAccount(req) : this.accountService.createAccount(req);
    observable
      .pipe(filter((res) => !!res))
      .subscribe({
        next: () => this.initAccounts()
      });
  }

  private initAccounts() {
    this.accountService.getAllAccounts()
      .pipe(finalize(() => this.cdRef.detectChanges()))
      .subscribe({
        next: (res) => this.accounts = res
      });
  }
}
