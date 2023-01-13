import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from '../../model/account.model';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './account-edit-modal.component.html',
  styleUrls: ['../../../bank/components/bank-edit-modal/bank-edit-modal.component.scss']
})
export class AccountEditModalComponent implements OnInit {

  accountModel?: AccountModel;
  details = false;

  accountForm = this.fb.group({
    account_number: ['', [Validators.required]],
    creation_date: ['', [Validators.required]],
    bonuses: ['', [Validators.required]],
    client_id: ['', [Validators.required]],
    bank_id: ['', [Validators.required]]
  });

  constructor(private readonly activeModal: NgbActiveModal, private readonly fb: NonNullableFormBuilder) {
  }

  static open(ngbModal: NgbModal, accountModel?: AccountModel, details?: boolean): NgbModalRef {
    const modal = ngbModal.open(AccountEditModalComponent, {
      centered: true
    });

    modal.componentInstance.accountModel = accountModel;
    modal.componentInstance.details = details;

    return modal;
  }

  get accountNumberControl(): FormControl<string> {
    return this.accountForm.controls.account_number;
  }

  get creationDateControl(): FormControl<string> {
    return this.accountForm.controls.creation_date;
  }

  get bonusesControl(): FormControl<string> {
    return this.accountForm.controls.bonuses;
  }

  get clientIdControl(): FormControl<string> {
    return this.accountForm.controls.client_id;
  }

  get bankIdControl(): FormControl<string> {
    return this.accountForm.controls.bank_id;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onDismiss(): void {
    this.activeModal.close();
  }

  private initForm(): void {
    if (this.accountModel) {
      this.accountForm.patchValue({
        account_number: this.accountModel.account_number || '',
        creation_date: this.accountModel.creation_date || '',
        bonuses: this.accountModel.bonuses || '',
        client_id: this.accountModel.bank_id || '',
        bank_id: this.accountModel.client_id || '',
      });
    }

    if (this.details) {
      this.accountForm.disable();
    }
  }

  saveAccount() {
    const account = { ...this.accountForm.getRawValue(), id: this.accountModel?.id } as AccountModel;
    this.activeModal.close({ account });
  }
}
