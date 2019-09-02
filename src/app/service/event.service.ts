import { Injectable } from '@angular/core';
import { Event } from '../model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  listaEventos: Event[];
  constructor() {
    this.listaEventos = [
      { name: "hdahdks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mCWKDL0vqc47KUAFvZ8PTIPzC8ty7MJJD9pnQZJ8X6-Zb8a5" },
      { name: "hdahdks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mCWKDL0vqc47KUAFvZ8PTIPzC8ty7MJJD9pnQZJ8X6-Zb8a5" },
      { name: "hdahdks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mCWKDL0vqc47KUAFvZ8PTIPzC8ty7MJJD9pnQZJ8X6-Zb8a5" },
      { name: "hdahdks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mCWKDL0vqc47KUAFvZ8PTIPzC8ty7MJJD9pnQZJ8X6-Zb8a5" },
      { name: "hdahdks", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0mCWKDL0vqc47KUAFvZ8PTIPzC8ty7MJJD9pnQZJ8X6-Zb8a5" },
    ]
  }
  getAll() {
    return this.listaEventos;
  }
}
