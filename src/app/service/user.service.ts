import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { Location } from '../model/Location';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string;

  constructor(private http: HttpClient) {

    this.url = "http://off.azr.es/api/users";

  }

  createUser(user: User): Promise<any> {
    return this.http.post(`${this.url}/register`, user).toPromise();
  }

  getLocationByUser(id: number): Promise<Location[]> {
    return this.http.get<Location[]>(this.url + '/' + id + '/locations').toPromise();
  }

  getById(id: number): Promise<any> {
    console.log('profile ok', id);
    return this.http.get<Promise<any>>(this.url + '/' + id).toPromise();
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