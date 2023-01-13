import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from '../../model/account.model';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BankService } from '../../../bank/bank.service';
import { ClientService } from '../../../client/client.service';
import { BankModel } from '../../../bank/model/bank.model';
import { ClientModel } from '../../../client/model/client.model';

@Component({
  templateUrl: './account-edit-modal.component.html',
  styleUrls: ['../../../bank/components/bank-edit-modal/bank-edit-modal.component.scss']
})
export class AccountEditModalComponent implements OnInit {

  accountModel?: AccountModel;
  bankList: BankModel[] = [];
  clientList: ClientModel[] = [];
  details = false;

  accountForm = this.fb.group({
    account_number: ['', [Validators.required]],
    creation_date: ['', [Validators.required]],
    bonuses: ['', [Validators.required]],
    client_id: [0, [Validators.required]],
    bank_id: [0, [Validators.required]]
  });

  constructor(private readonly activeModal: NgbActiveModal, private readonly fb: NonNullableFormBuilder,
              private readonly bankService: BankService, private readonly clientService: ClientService) {
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

  get clientControl(): FormControl<number> {
    return this.accountForm.controls.client_id;
  }

  get bankControl(): FormControl<number> {
    return this.accountForm.controls.bank_id;
  }

  ngOnInit(): void {
    this.initForm();
    this.getDictionaryList();
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
        client_id: this.accountModel.clientX!.id || 0,
        bank_id: this.accountModel.bankX!.id || 0
      });
    }

    if (this.details) {
      this.accountForm.disable();
    }
  }

  saveAccount() {
    const account = {
      ...this.accountForm.getRawValue(),
      id: this.accountModel?.id
    } as unknown as AccountModel;
    this.activeModal.close({ account });
  }

  private getDictionaryList() {
    this.bankService.getAllBanks().subscribe({
      next: (res) => this.bankList = res
    });

    this.clientService.getAllClients().subscribe({
      next: (res) => this.clientList = res
    });
  }
}
