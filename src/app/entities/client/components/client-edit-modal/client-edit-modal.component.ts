import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientModel } from '../../model/client.model';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-edit-modal',
  templateUrl: './client-edit-modal.component.html',
  styleUrls: ['./client-edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientEditModalComponent {

  clientModel?: ClientModel;

  //TODO --> PESEL VALIDATOR
  signUpForm = this.fb.group({
    pesel: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    address: ['', [Validators.required]],
    can_get_loan: ['', [Validators.required]],
  });

  constructor(private readonly activeModal: NgbActiveModal, private readonly fb: NonNullableFormBuilder) {
  }

  static open(ngbModal: NgbModal, clientModel?: ClientModel): NgbModalRef {
    const modal = ngbModal.open(ClientEditModalComponent, {
      size: 'lg',
      centered: true
    });

    modal.componentInstance.clientModel = clientModel;

    return modal;
  }

  onDismiss(): void {
    this.activeModal.close()
  }
}
