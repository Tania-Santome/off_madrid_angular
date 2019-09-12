import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './service/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }

  /**
   * Si devuelve false no permite entrar en la ruta
   */
  canActivate() {
    // return true;
    if (this.userService.isUserLogged()) {
      return true
    }
    else {
      this.router.navigate(['/users/login'])
    }
  }
}
