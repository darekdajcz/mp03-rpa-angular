import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../../app.constants';
import { Observable } from 'rxjs';
import { RegisterUser } from '../../entities/login/models/user';
import { LoginModel } from '../../entities/login/models/login.model';
import { LoginResponse } from '../../entities/login/models/login.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private resourceUrl = `${ SERVER_API_URL }/api/user`;

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }`);
  }

  logIn(credentials: Pick<LoginModel, 'username' | 'password'>): Observable<LoginResponse> {
    const req = { username: credentials.username, password: credentials.password };
    return this.http.post<LoginResponse>(`${ this.resourceUrl }/login`, req);
  }

  account(credentials: LoginModel): Observable<LoginResponse> {
    const req = { username: credentials.username, password: credentials.password };
    return this.http.post<LoginResponse>(`${ this.resourceUrl }/login`, req);
  }

  register(user: RegisterUser): Observable<any> {
    const req = {
      username: user.username, email: user.email, password: user.password, role: user.role
    };
    return this.http.post(`${ this.resourceUrl }/sign-up`, req);
  }
}
