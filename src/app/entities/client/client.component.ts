import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { ClientModel } from './model/client.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];

  constructor(private readonly clientService: ClientService, private readonly authService: AuthService) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({ next: (res) => this.clients = res });
    this.authService.getAllUsers().subscribe({ next: (res) => '' });
  }
}
