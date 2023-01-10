import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { finalize, take } from 'rxjs';
import { ClientModel } from './model/client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientEditModalComponent } from './components/client-edit-modal/client-edit-modal.component';

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
    this.clientService.getAllClients()
      .pipe(finalize(() => this.cdRef.detectChanges()))
      .subscribe({
        next: (res) => this.clients = res
      });
  }

  addClient(): void {
    const modal = ClientEditModalComponent.open(this.modal);

    modal.closed
      .pipe(take(1))
      .subscribe({ next: (res) => this.createClient(res) });
  }

  private createClient(res: ClientModel): void {

  }
}
