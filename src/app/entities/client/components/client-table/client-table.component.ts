import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ClientModel } from '../../model/client.model';

@Component({
  selector: 'app-bank-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['../../../bank/components/bank-table/bank-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientTableComponent implements OnInit {
  _clients: ClientModel[];
  @Input() set clients(value: ClientModel[]) {
    this._clients = value;
  };

  get clients(): ClientModel[] {
    return this._clients;
  }

  @Output() updateClientEmitter = new EventEmitter<ClientModel>();
  @Output() deleteClientEmitter = new EventEmitter<number>();
  @Output() detailsClientEmitter = new EventEmitter<ClientModel>();

  ngOnInit(): void {
  }

  updateClient(client: ClientModel): void {
    this.updateClientEmitter.emit(client);
  }

  deleteClient(id: number): void {
    this.deleteClientEmitter.emit(id);
  }

  detailsClient(client: ClientModel): void {
    this.detailsClientEmitter.emit(client);
  }
}
