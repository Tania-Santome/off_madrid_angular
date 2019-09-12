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

  getById(id: number): Promise<any> {
    console.log('aquí estamos', id);
    return this.http.get<Promise<any>>(this.url + '/' + id).toPromise();
  }

  createLocation(location: Location): Promise<any> {
    return this.http.post<any>(this.url, location).toPromise();
  }
  updateLocation(location: Event): Promise<any> {
    return this.http.put<any>(this.url, location).toPromise();
  }

  deleteLocation(location: Location): Promise<any> {
    return this.http.delete<any>(this.url + "/" + location.id).toPromise();
  }
}
