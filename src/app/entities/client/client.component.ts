import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { finalize } from 'rxjs';
import { ClientModel } from './model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];

  constructor(private readonly clientService: ClientService, private readonly cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients()
      .pipe(finalize(() => this.cdRef.detectChanges()))
      .subscribe({
        next: (res) => this.clients = res
      });
  }

  addClient(): void {

  }
}
