import { Injectable } from '@angular/core';
import { User } from '../../entities/login/models/user';

const ACCESS_KEY = 'accessToken';
const TOKEN_KEY = 'refreshToken';
const USER_KEY = 'auth-user';
const LNG_KEY = 'lng';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  signOut(): void {
    const getLang = this.getLang();
    window.sessionStorage.clear();
    // this.saveLang(getLang);
  }

  saveLang(lng: string): void {
    window.sessionStorage.setItem(LNG_KEY, lng);
  }

  getLang(): string {
    return sessionStorage.getItem(LNG_KEY)!;
  }

  saveToken(token: string, refreshToken = false): void {
    if (!refreshToken) {
      window.sessionStorage.removeItem(ACCESS_KEY);
      window.sessionStorage.setItem(ACCESS_KEY, token);
    } else {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }

  getToken(refreshToken = false): string {
    return !refreshToken ? sessionStorage.getItem(ACCESS_KEY)! : sessionStorage.getItem(TOKEN_KEY)!;
  }

  saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): User {
    return JSON.parse(sessionStorage.getItem(USER_KEY)!);
  }
}
