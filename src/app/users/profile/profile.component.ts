import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/User';
import { Location } from '../../model/Location';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  locations: Location[];



  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
    this.locations = new Array();
  }

  ngOnInit() {

    const user_id = Number(localStorage.getItem('user_id'));

    this.userService.getById(user_id)
      .then(response => {
        this.user = response;
      })
      .catch((error) => {
        console.log('ay chachoo que ha pasao algooo!', error);
      });

    this.userService.getLocationByUser(user_id)
      .then(response => {
        console.log(response);
        this.locations = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }





  // onClickPremio() {
  //   const user_id = localStorage.getById('user_id');
  //   this.registroService.obtenerPremio(token)
  //     .then(response => {
  //       console.log(response);
  //     })
  // }



  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/main'])
  }
  rutaCompletaImagen(nombreImagen) {
    return "http://off.azr.es/images/" + nombreImagen
  }
}
