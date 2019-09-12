import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  login: any;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.formulario = new FormGroup({


      email: new FormControl('tfsantome@gmail.com', [
        Validators.required
      ]),
      password: new FormControl('1234', [
        Validators.required
      ]),
    })
  }

  ngOnInit() { }


  onSubmit() {
    this.userService.login(this.formulario.value)
      .then(response => {
        console.log(response);
        if (response['token']) {
          localStorage.setItem('user-token', response['token']);
          localStorage.setItem('user_id', response['user_id']);



          // Redirigir a mi perfil
          this.router.navigate(['/users/profile'])
        } else {
          alert(response['err'])
        }
      })
  }

}