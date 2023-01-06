import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../../app.constants';
import { Observable } from 'rxjs';
import { User } from '../../entities/login/models/user';
import { LoginModel } from '../../entities/login/models/login.model';

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

  logIn(credentials: LoginModel): Observable<any> {
    const req = { username: credentials.username, password: credentials.password };
    return this.http.post(`${ this.resourceUrl }/login`, req);
  }

  register(user: User): Observable<any> {
    const req = {
      username: user.username, email: user.email, password: user.password, role: user.role
    };
    return this.http.post(`${ this.resourceUrl }/sign-up`, req);
  }
}
