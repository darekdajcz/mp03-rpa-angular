import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { ClientModel } from '../../model/client.model';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
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

  constructor(private readonly cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.error(this.clients);
  }

  canGetLoan(can_get_loan: string) {
    return can_get_loan ? 'Tak' : 'Nie';
  }

  updateClient(client: ClientModel) {
    this.updateClientEmitter.emit(client);
  }

  deleteClient(id: number) {
    this.deleteClientEmitter.emit(id);
  }
}
