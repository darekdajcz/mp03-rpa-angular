import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './confirm-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {

  messageHeader: string;
  private readonly activeModal = inject(NgbActiveModal);

  static open(ngbModal: NgbModal, messageHeader: string): NgbModalRef {
    const modal = ngbModal.open(ConfirmDialogComponent, {
      centered: true
    });

    modal.componentInstance.messageHeader = messageHeader;

    return modal;
  }

  onDismiss(): void {
    this.activeModal.close(false);
  }

  onConfirm(): void {
    this.activeModal.close(true);
  }
}
