import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientModel } from '../../model/client.model';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit-modal',
  templateUrl: './client-edit-modal.component.html',
  styleUrls: ['./client-edit-modal.component.scss']
})
export class ClientEditModalComponent implements OnInit {

  clientModel?: ClientModel;

  // TODO --> PESEL VALIDATOR
  clientForm = this.fb.group({
    pesel: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    address: ['', [Validators.required]],
    can_get_loan: ''
  });

  constructor(private readonly activeModal: NgbActiveModal, private readonly fb: NonNullableFormBuilder) {
  }

  static open(ngbModal: NgbModal, clientModel?: ClientModel): NgbModalRef {
    const modal = ngbModal.open(ClientEditModalComponent, {
      centered: true
    });

    modal.componentInstance.clientModel = clientModel;

    return modal;
  }

  get peselControl(): FormControl<string> {
    return this.clientForm.controls.pesel;
  }

  get firstNameControl(): FormControl<string> {
    return this.clientForm.controls.first_name;
  }

  get surnameControl(): FormControl<string> {
    return this.clientForm.controls.surname;
  }

  get addressControl(): FormControl<string> {
    return this.clientForm.controls.address;
  }

  get canGetLoanControl(): FormControl<string> {
    return this.clientForm.controls.can_get_loan;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onDismiss(): void {
    this.activeModal.close();
  }

  private initForm(): void {
    if (this.clientModel) {
      this.clientForm.patchValue({
        pesel: this.clientModel.pesel || '',
        first_name: this.clientModel.first_name || '',
        surname: this.clientModel.surname || '',
        address: this.clientModel.address || '',
        can_get_loan: this.clientModel.can_get_loan || ''
      });
    }
  }

  saveClient() {
    const client = { ...this.clientForm.getRawValue(), id: this.clientModel?.id} as ClientModel;

    this.activeModal.close({ client });
  }
}
