import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BankService } from './bank.service';
import { filter, finalize, Observable, take } from 'rxjs';
import { BankModel } from './model/bank.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankEditModalComponent } from './components/bank-edit-modal/bank-edit-modal.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { EditedResponse } from '../client/model/edit-response.model';

@Component({
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BankComponent implements OnInit {

  banks: BankModel[];

  constructor(private readonly bankService: BankService, private readonly cdRef: ChangeDetectorRef,
              private readonly modal: NgbModal) {
  }

  ngOnInit(): void {
    this.initBanks();
  }

  updateBank(bank?: BankModel): void {
    this.editModal(bank);
  }

  editModal(bank?: BankModel, details = false): void {
    const modal = BankEditModalComponent.open(this.modal, bank, details);

    modal.closed
      .pipe(take(1),
        filter((res) => !!res))
      .subscribe({ next: ({ bank }) => this.saveBank(bank) });
  }


  deleteBank($event: number) {

    const deleteId = $event;

    const modal = ConfirmDialogComponent.open(this.modal, 'Czy na pewno chcesz usunąć tego klienta?');

    modal.closed
      .pipe(take(1),
        filter((res) => res))
      .subscribe({ next: () => this.confirmDeleteBank(deleteId) });
  }

  detailsBank(bank: BankModel) {
    this.editModal(bank, true);
  }

  private confirmDeleteBank(id: number) {
    this.bankService.deleteBank(id)
      .pipe(filter((res) => res.deleted))
      .subscribe({
        next: () => this.initBanks()
      });
  }

  private saveBank(req: BankModel): void {
    let observable: Observable<Partial<EditedResponse>> = req.id ? this.bankService.updateBank(req) : this.bankService.createBank(req);
    observable
      .pipe(filter((res) => !!res))
      .subscribe({
        next: () => this.initBanks()
      });
  }

  private initBanks() {
    this.bankService.getAllBanks()
      .pipe(finalize(() => this.cdRef.detectChanges()))
      .subscribe({
        next: (res) => this.banks = res
      });
  }
}
