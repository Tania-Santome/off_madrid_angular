import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/service/location.service';
import { Location } from 'src/app/model/Location';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {

  listaLocations: Location[];

  constructor(private locationService: LocationService) { }


  ngOnInit() {
    this.locationService.getAll()
      .then(response => {
        this.listaLocations = response;
      })
      .catch(error => {
        console.log(error);
      })

  }
}
