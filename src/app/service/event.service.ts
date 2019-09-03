import { Injectable } from '@angular/core';
import { Event } from '../model/Event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:3030/events";

  }
  getAll(): Promise<Event[]> {
    return this.http.get<Event[]>(this.url).toPromise();
  }



}
