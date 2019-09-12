import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.evento = new Event();
    this.formulario = new FormGroup({

      location_id: new FormControl("", [
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

      end_date: new FormControl('', [
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

      id: new FormControl("", [
        Validators.required
      ]),

    })

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {



      this.eventService.getById(params.id)
        .then(response => {

          this.evento = response;

          this.formulario.controls['location_id'].setValue(this.evento.location_id);
          this.formulario.controls['name'].setValue(this.evento.name);
          this.formulario.controls['type'].setValue(this.evento.type);
          this.formulario.controls['start_date'].setValue(this.evento.start_date);
          this.formulario.controls['end_date'].setValue(this.evento.end_date);
          this.formulario.controls['image'].setValue(this.evento.image);
          this.formulario.controls['description'].setValue(this.evento.description);
          this.formulario.controls['price'].setValue(this.evento.price);
          this.formulario.controls['id'].setValue(this.evento.id);


        })
        .catch((err) => {
          console.log(err);
        })
    });
  }
  onSubmit() {

    this.eventService.updateEvent(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.log(error)
      })
  }
}