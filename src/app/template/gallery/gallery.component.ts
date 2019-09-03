import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/Event';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  listaEventos: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAll()
      .then(response => {
        this.listaEventos = response;
      })
      .catch(error => {
        console.log(error);
      })

  }
}


