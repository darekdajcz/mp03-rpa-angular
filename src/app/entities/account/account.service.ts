import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel } from './model/account.model';
import { EditedResponse } from '../client/model/edit-response.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private resourceUrl = `${ SERVER_API_URL }/api/account`;

  constructor(private readonly http: HttpClient) {
  }

  getAllAccounts = (): Observable<AccountModel[]> =>
    this.http.get<AccountModel[]>(`${ this.resourceUrl }/all`);

  createAccount = (req: Omit<AccountModel, 'id'>): Observable<Pick<EditedResponse, 'created'>> =>
    this.http.post<Pick<EditedResponse, 'created'>>(`${ this.resourceUrl }/create`, req);

  updateAccount = (req: AccountModel): Observable<Pick<EditedResponse, 'updated'>> =>
    this.http.put<Pick<EditedResponse, 'updated'>>(`${ this.resourceUrl }/update`, req);

  deleteAccount = (id: number): Observable<Pick<EditedResponse, 'deleted'>> =>
    this.http.delete<Pick<EditedResponse, 'deleted'>>(`${ this.resourceUrl }/${id}`);
}
