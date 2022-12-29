import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private resourceUrl = `${ SERVER_API_URL }/auth`;

  constructor(private readonly http: HttpClient) {
  }

  login(credentials: any): Observable<any> {
    const req = { username: credentials.username, password: credentials.password };
    return this.http.post(`${ this.resourceUrl }/sign-in`, req);
  }

  register(user: any): Observable<any> {
    const req = {
      username: user.username,
      email: user.email,
      password: user.password
    };
    return this.http.post(`${ this.resourceUrl }/sign-up`, req);
  }
}
