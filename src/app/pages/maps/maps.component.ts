import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { Location } from 'src/app/model/Location';

declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],

})
export class MapsComponent implements OnInit {

  listaLocations: Location[];

  constructor(private locationService: LocationService) { }

  @ViewChild('googleMap', { static: false }) gMapElement: any;
  map: any;

  ngOnInit() {

  }


  ngAfterViewInit() {

    let coords = {
      latitude: 40.419812,
      longitude: -3.703012
    }

    // Tenemos que llamar la funcion en ngAfterViewInit
    // Por que en el ngOnInit el div aun no existe.
    this.loadMap(coords);
  }

  loadMap(coords: any) {

    // Objeto necesario para inicializar el mapa con coordenadas y tipi
    let mapProps = {
      center: new google.maps.LatLng(coords.latitude, coords.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    // Creamos el mapa como tal
    this.map = new google.maps.Map(this.gMapElement.nativeElement, mapProps);

    //creamos el bucle
    this.locationService.getAll()
      .then(response => {
        this.listaLocations = response;

        // Bucle
        this.listaLocations.forEach(location => {
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(location.lat, location.lng),
            title: 'Aquí estoy mamá!'
          });

          // Añadimos el objeto marcador al mapa
          marker.setMap(this.map);
        });

      })
      .catch(error => {
        console.log(error);
      })

    // Creamos objeto marcador


  }

}

