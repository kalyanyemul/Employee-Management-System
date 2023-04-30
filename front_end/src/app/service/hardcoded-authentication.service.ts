import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor(private cookie: CookieService) {}

  authenticate(username: any, password: any) {
    if (username === 'kalyan' && password === 'kalyan') {
      // sessionStorage.setItem('authenticaterUser', username);
      localStorage.setItem('authenticaterUser', username);

      // this.cookie.set('authenticateUser', username);
      return true;
    }
    return false;
  }

  // user = sessionStorage.getItem('authenticaterUser');

  isUserLoggedIn() {
    // let user = sessionStorage.getItem('authenticaterUser')
    // console.log(user);
    let user = localStorage.getItem('authenticaterUser');
    // let user = this.cookie.get('authenticateUser');
    return !(user === null);
  }

  logout() {
    // sessionStorage.removeItem('authenticaterUser');
    localStorage.removeItem('authenticaterUser');
    // this.cookie.deleteAll('authenticateUser');
  }
}
