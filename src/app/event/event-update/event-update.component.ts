import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/service/event.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from 'src/app/model/Event';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  evento: Event;
  formulario: FormGroup;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
    this.formulario = new FormGroup({

      location_id: new FormControl(1, [
        Validators.required
      ]),

      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(15)
      ]),

      type: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      start_date: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      end_date: new FormControl('1', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      image: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(300)
      ]),

      price: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

    })

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);


      this.eventService.getById(params.id)
        .then(response => {
          console.log(response)
          this.evento = response;

          this.formulario.controls['name'].setValue(this.evento.name);
          this.formulario.controls['type'].setValue(this.evento.type);
          this.formulario.controls['start_date'].setValue(this.evento.start_date);
          this.formulario.controls['end_date'].setValue(this.evento.end_date);
          this.formulario.controls['image'].setValue(this.evento.image);
          this.formulario.controls['description'].setValue(this.evento.description);
          this.formulario.controls['price'].setValue(this.evento.price);

          console.log(this.formulario.value);
        })
        .catch((err) => {
          console.log(err);
        })
    });
  }

}
