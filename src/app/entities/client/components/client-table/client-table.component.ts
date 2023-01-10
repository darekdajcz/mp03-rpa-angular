import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  constructor(private readonly cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.error(this.clients);
  }

  canGetLoan(can_get_loan: string) {
    return can_get_loan ? 'Tak' : 'Nie'
  }
}
