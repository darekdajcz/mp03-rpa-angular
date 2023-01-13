import { inject, Injectable } from '@angular/core';
import { SERVER_API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankModel } from './model/bank.model';
import { EditedResponse } from '../client/model/edit-response.model';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private resourceUrl = `${ SERVER_API_URL }/api/bank`;
  private readonly http = inject(HttpClient)

  getAllBanks = (): Observable<BankModel[]> =>
    this.http.get<BankModel[]>(`${ this.resourceUrl }/all`);

  createBank = (req: Omit<BankModel, 'id'>): Observable<Pick<EditedResponse, 'created'>> =>
    this.http.post<Pick<EditedResponse, 'created'>>(`${ this.resourceUrl }/create`, req);

  updateBank = (req: BankModel): Observable<Pick<EditedResponse, 'updated'>> =>
    this.http.put<Pick<EditedResponse, 'updated'>>(`${ this.resourceUrl }/update`, req);

  deleteBank = (id: number): Observable<Pick<EditedResponse, 'deleted'>> =>
    this.http.delete<Pick<EditedResponse, 'deleted'>>(`${ this.resourceUrl }/${ id }`);
}
