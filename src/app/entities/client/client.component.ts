import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { filter, finalize, Observable, take } from 'rxjs';
import { ClientModel } from './model/client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientEditModalComponent } from './components/client-edit-modal/client-edit-modal.component';
import { EditedResponse } from './model/edit-response.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];

  constructor(private readonly clientService: ClientService, private readonly cdRef: ChangeDetectorRef,
              private readonly modal: NgbModal) {
  }

  ngOnInit(): void {
    this.initClients();
  }

  updateClient(client?: ClientModel): void {
    const modal = ClientEditModalComponent.open(this.modal, client);

    modal.closed
      .pipe(take(1),
        filter(({ client }) => !!client))
      .subscribe({ next: ({ client }) => this.saveClient(client) });
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
