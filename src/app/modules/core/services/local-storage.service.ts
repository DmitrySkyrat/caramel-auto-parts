import { Injectable } from '@angular/core';
import { IToken } from '../../auth/models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private _appToken!: IToken;

  set appToken(token: IToken) {
    this._appToken = token;
  }

  get appToken(): IToken {
    return this._appToken;
  }

  constructor() {}

  setTokenToStarage(newToken: IToken) {
    this.appToken = newToken;
    window.localStorage.setItem("token", newToken.token);
  }

  checkToken(): boolean {
    return this.appToken.token === window.localStorage.getItem('token');
  }
}
