import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../model/Event';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.css']
})
export class ShowEventComponent implements OnInit {

  evento: Event;



  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) { this.evento = new Event(); }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);


      this.eventService.getById(params.id)
        .then(response => {
          console.log(response)
          this.evento = response;
        })
        .catch((err) => {
          console.log(err);
        })
    });


  }
  rutaCompletaImagen(nombreImagen) {
    return "http://off.azr.es/images/" + nombreImagen
  }

  deleteEvent(evento) {

    this.eventService.deleteEvent(evento)
      .then(response => {
        console.log('está pasando por el ts, llamado al delete que hemos declarado en el servicio', response);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.log(error)
      })
  }
}