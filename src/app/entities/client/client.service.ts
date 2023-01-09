import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from './model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private resourceUrl = `${ SERVER_API_URL }/api/client`;

  constructor(private readonly http: HttpClient) {
  }

  getAllClients = (): Observable<ClientModel[]> =>
    this.http.get<ClientModel[]>(`${ this.resourceUrl }/all`);

}
