import { Injectable } from '@angular/core';
import { Location } from '../model/Location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://off.azr.es/api/locations";
  }

  getAll(): Promise<Location[]> {
    return this.http.get<Location[]>(this.url).toPromise();
  }

}
