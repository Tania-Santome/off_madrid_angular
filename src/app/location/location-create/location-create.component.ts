import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/service/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {
  formulario: FormGroup;

  constructor(private locationService: LocationService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formulario = new FormGroup({

      user_id: new FormControl('', [
        Validators.required
      ]),

      name: new FormControl('Teatro de las Maravillas', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      image: new FormControl('url', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      description: new FormControl('un teatro muy gonito', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      type: new FormControl('Comedia', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      city: new FormControl('Madrid', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      cp: new FormControl('28032', [
        Validators.required,
        Validators.maxLength(30)
      ]),

      address: new FormControl('c/Cantueso', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      lat: new FormControl('89.25293', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      lng: new FormControl('45.08724', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      url: new FormControl('url', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      capacity: new FormControl('mucha gente', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      phone: new FormControl('888888888', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      email: new FormControl('maravilla@hotmail.com', [
        Validators.required,
        Validators.maxLength(157)
      ]),
    })
  }

  ngOnInit() {
  }

  onSubmit() {

    this.locationService.createLocation(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/users/profile']);

      })
      .catch(error => {
        console.log(error)
      })
  }
}
