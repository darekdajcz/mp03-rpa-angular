import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private resourceUrl = `${ SERVER_API_URL }/user`;

  constructor(private readonly http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }/all`, { responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }/user`, { responseType: 'text'});
  }

  getModBoard(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }/mod`, { responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }/admin`, { responseType: 'text'});
  }
}
