import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  setCookies() {
    Cookies.set('app', 'space', { expires: 7 });
  }
}
