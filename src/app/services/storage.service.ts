import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
 

  public username = new BehaviorSubject<string>("");
  public isLogin = new BehaviorSubject<boolean>(false);

  getUserName(){
    return this.username.asObservable();
  }

  getLogin(){
    return this.isLogin.asObservable();
  }

  public getToken(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userToken = JSON.parse(user)
      return userToken.jwtToken;
    }
    return {};
  }

  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
    this.isLogin.closed
    this.username.closed;

  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    this.username.next( user.user.userName)
    this.isLogin.next(true)
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userData = JSON.parse(user);
      console.log("Saiful --",JSON.parse(user))
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(userData.jwtToken);
      console.log("decodedToken --",decodedToken)
// Other functions
      const expirationDate = helper.getTokenExpirationDate(userData.jwtToken);
      console.log("expirationDate --",expirationDate)
      const isExpired = helper.isTokenExpired(userData.jwtToken);
      console.log("isExpired --",isExpired)

      return userData.user;
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem( 'auth-user');
    if (user) {
      return true;
    }
    return false;
  }


  

}
