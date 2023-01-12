import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BankModel } from '../../model/bank.model';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './bank-edit-modal.component.html',
  styleUrls: ['./bank-edit-modal.component.scss']
})
export class BankEditModalComponent implements OnInit {

  bankModel?: BankModel;
  details = false;

  bankForm = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]]
  });

  constructor(private readonly activeModal: NgbActiveModal, private readonly fb: NonNullableFormBuilder) {
  }

  static open(ngbModal: NgbModal, bankModel?: BankModel, details?: boolean): NgbModalRef {
    const modal = ngbModal.open(BankEditModalComponent, {
      centered: true
    });

    modal.componentInstance.bankModel = bankModel;
    modal.componentInstance.details = details;

    return modal;
  }

  get nameControl(): FormControl<string> {
    return this.bankForm.controls.name;
  }

  get addressControl(): FormControl<string> {
    return this.bankForm.controls.address;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onDismiss(): void {
    this.activeModal.close();
  }

  private initForm(): void {
    if (this.bankModel) {
      this.bankForm.patchValue({
        name: this.bankModel.name || '',
        address: this.bankModel.address || '',
      });
    }

    if (this.details) {
      this.bankForm.disable();
    }
  }

  saveBank() {
    const bank = { ...this.bankForm.getRawValue(), id: this.bankModel?.id } as BankModel;

    this.activeModal.close({ bank });
  }
}
