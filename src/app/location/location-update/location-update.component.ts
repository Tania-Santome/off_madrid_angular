import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from 'src/app/service/location.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {
  formulario: FormGroup;
  location: any;
  constructor(private locationService: LocationService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formulario = new FormGroup({

      user_id: new FormControl('', [
        Validators.required
      ]),

      id: new FormControl('', [
        Validators.required
      ]),


      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      image: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      type: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(15)
      ]),

      cp: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),

      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      lat: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      lng: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      url: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      capacity: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(157)
      ]),
    })
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {



      this.locationService.getById(params.id)
        .then(response => {

          this.location = response;

          this.formulario.controls['user_id'].setValue(this.location.user_id);
          this.formulario.controls['name'].setValue(this.location.name);
          this.formulario.controls['image'].setValue(this.location.image);
          this.formulario.controls['description'].setValue(this.location.description);
          this.formulario.controls['type'].setValue(this.location.type);
          this.formulario.controls['city'].setValue(this.location.city);
          this.formulario.controls['cp'].setValue(this.location.cp);
          this.formulario.controls['address'].setValue(this.location.address);
          this.formulario.controls['lat'].setValue(this.location.lat);
          this.formulario.controls['lng'].setValue(this.location.lng);
          this.formulario.controls['url'].setValue(this.location.url);
          this.formulario.controls['capacity'].setValue(this.location.capacity);
          this.formulario.controls['phone'].setValue(this.location.phone);
          this.formulario.controls['email'].setValue(this.location.email);
          this.formulario.controls['id'].setValue(this.location.id);


        })
        .catch((err) => {
          console.log(err);
        })
    });
  }

  onSubmit() {

    this.locationService.updateLocation(this.formulario.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.log(error)
      })
  }
}
