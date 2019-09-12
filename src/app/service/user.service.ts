import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  constructor(private http: HttpClient) {

    this.url = "http://off.azr.es/api/users";

  }

  createUser(user: User): Promise<any> {
    return this.http.post<any>(this.url, user).toPromise();
  }

  login(user: User): Promise<any> {
    return this.http.post(`${this.url}/login`, user).toPromise();
  }

  isUserLogged() {
    if (localStorage.getItem('user-token')) {
      return true;
    } else {
      return false;
    }
  }

}