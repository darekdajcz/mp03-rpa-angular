import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from '../../app.constants';
import { Observable } from 'rxjs';
import { RegisterUser } from '../../entities/login/models/user';
import { LoginModel } from '../../entities/login/models/login.model';
import { LoginResponse } from '../../entities/login/models/login.response';
import { EditedResponse } from '../../entities/client/model/edit-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private resourceUrl = `${ SERVER_API_URL }/api/user`;

  constructor(private readonly http: HttpClient) {
  }

  // getAllUsers(): Observable<any> {
  //   return this.http.get(`${ this.resourceUrl }/all-users`);
  // }

  getAllUsersToApprove(): Observable<any> {
    return this.http.get(`${ this.resourceUrl }/all-users`);
  }

  logIn(credentials: Pick<LoginModel, 'username' | 'password'>): Observable<LoginResponse> {
    const req = { username: credentials.username, password: credentials.password };
    return this.http.post<LoginResponse>(`${ this.resourceUrl }/login`, req);
  }

  register(user: RegisterUser): Observable<any> {
    const req = {
      username: user.username, email: user.email, password: user.password, role: user.role, approved: user.approved
    };
    return this.http.post(`${ this.resourceUrl }/register`, req);
  }

  registerStraight(user: RegisterUser): Observable<any> {
    const req = { id: user.id,
      username: user.username, email: user.email, password: user.password, role: user.role, approved: '1'
    };
    return this.http.put(`${ this.resourceUrl }/update`, req);
  }

  deleteTmpUser = (id: number): Observable<Pick<EditedResponse, 'deleted'>> =>
    this.http.delete<Pick<EditedResponse, 'deleted'>>(`${ this.resourceUrl }/${ id }`);

}
