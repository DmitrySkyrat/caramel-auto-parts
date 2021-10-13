import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  private _isAdmin = false;

  constructor(private http: HttpClient) {}

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  login(login: string, password: string): Observable<IToken> {
    return this.http.post<IToken>('http://localhost:3004/auth/login', {login, password});
  }
}
