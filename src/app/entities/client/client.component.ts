import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { filter, finalize, Observable, take } from 'rxjs';
import { ClientModel } from './model/client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientEditModalComponent } from './components/client-edit-modal/client-edit-modal.component';
import { EditedResponse } from './model/edit-response.model';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserRoles } from '../login/models/user-roles';
import { TokenStorageService } from '../../shared/services/token-storage.service';

@Component({
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];

  constructor(private readonly clientService: ClientService, private readonly cdRef: ChangeDetectorRef,
              private readonly modal: NgbModal, private readonly tokenService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.initClients();
  }

  updateClient(client?: ClientModel): void {
    this.editModal(client);
  }

  editModal(client?: ClientModel, details = false): void {
    const modal = ClientEditModalComponent.open(this.modal, client, details);

    modal.closed
      .pipe(take(1),
        filter((res) => !!res))
      .subscribe({ next: ({ client }) => this.saveClient(client) });
  }

  canEdit(): boolean {
    return this.tokenService.getUser().role !== UserRoles.ROLE_USER;
  }

  deleteClient($event: number) {

    const deleteId = $event;

    const modal = ConfirmDialogComponent.open(this.modal, 'cancel.client');

    modal.closed
      .pipe(take(1),
        filter((res) => res))
      .subscribe({ next: () => this.confirmDeleteClient(deleteId) });
  }

  detailsClient(client: ClientModel) {
    this.editModal(client, true);
  }

  private confirmDeleteClient(id: number) {
    this.clientService.deleteClient(id)
      .pipe(filter((res) => res.deleted))
      .subscribe({
        next: () => this.initClients()
      });
  }

  private saveClient(req: ClientModel): void {
    let observable: Observable<Partial<EditedResponse>> = req.id ? this.clientService.updateClient(req) : this.clientService.createClient(req);
    observable
      .pipe(filter((res) => !!res))
      .subscribe({
        next: () => this.initClients()
      });
  }

  private initClients() {
    this.clientService.getAllClients()
      .pipe(finalize(() => this.cdRef.detectChanges()))
      .subscribe({
        next: (res) => this.clients = res
      });
  }
}
