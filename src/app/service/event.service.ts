import { Injectable } from '@angular/core';
import { Event } from '../model/Event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string;
  constructor(private http: HttpClient) {
    // esto es lo que hicimos al principio 
    this.url = "http://off.azr.es/api/events";
    // this.url = "http://localhost:3333/api/events";

  }
  getAll(): Promise<Event[]> {
    return this.http.get<Event[]>(this.url).toPromise();
  }

  getById(id: number): Promise<any> {
    console.log('aquí estamos', id);
    return this.http.get<Promise<any>>(this.url + '/' + id).toPromise();
  }

  createEvent(evento: Event): Promise<any> {
    return this.http.post<any>(this.url, evento).toPromise();
  }

  updateEvent(evento: Event): Promise<any> {
    return this.http.put<any>(this.url, evento).toPromise();
  }

  deleteEvent(evento: Event): Promise<any> {
    return this.http.delete<any>(this.url + "/" + evento.id).toPromise();
  }

}
