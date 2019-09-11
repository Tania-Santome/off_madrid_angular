import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventService } from 'src/app/service/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  //nuestro formulario
  formulario: FormGroup;


  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formulario = new FormGroup({

      location_id: new FormControl(1, [
        Validators.required
      ]),

      name: new FormControl('paco', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      type: new FormControl('comedia', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      start_date: new FormControl('19/11/2019', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      end_date: new FormControl('12/12/2019', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      image: new FormControl('/events/maldito-huesos.jpg', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      description: new FormControl('una obra muy buena', [
        Validators.required,
        Validators.maxLength(300)
      ]),

      price: new FormControl('60.00', [
        Validators.required,
        Validators.maxLength(15)
      ]),

    })

  }
  /**
   * 
   */

  ngOnInit() {
  }

  onSubmit() {

    this.eventService.createEvent(this.formulario.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    //   if (response[]) {
    //     localStorage.setItem('user-token', response['token']);
    //   } else {
    //     alert('Error en el registro. Inténtalo más tarde.');
    //   }
    // })
    // .catch(err => {
    //   alert('Error en el registro. Inténtalo más tarde.');
    // });
  }

}
