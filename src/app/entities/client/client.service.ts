import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientModel } from './model/client.model';
import { EditedResponse } from './model/edit-response.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private resourceUrl = `${ SERVER_API_URL }/api/client`;

  constructor(private readonly http: HttpClient) {
  }

  getAllClients = (): Observable<ClientModel[]> =>
    this.http.get<ClientModel[]>(`${ this.resourceUrl }/all`);

  createClient = (req: Omit<ClientModel, 'id'>): Observable<Pick<EditedResponse, 'created'>> =>
    this.http.post<Pick<EditedResponse, 'created'>>(`${ this.resourceUrl }/create`, req);


  updateClient = (req: ClientModel): Observable<Pick<EditedResponse, 'updated'>> =>
    this.http.put<Pick<EditedResponse, 'updated'>>(`${ this.resourceUrl }/update`, req);

  deleteClient = (id: number): Observable<Pick<EditedResponse, 'deleted'>> =>
    this.http.delete<Pick<EditedResponse, 'deleted'>>(`${ this.resourceUrl }/${id}`);
}
