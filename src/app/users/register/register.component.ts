import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.formulario = new FormGroup({

      name: new FormControl('tfsantome@gmail.com', [
        Validators.required
      ]),
      email: new FormControl('tfsantome@gmail.com', [
        Validators.required
      ]),
      password: new FormControl('1234', [
        Validators.required
      ]),
      repeat_password: new FormControl('1234', [
        Validators.required
      ]),
    })
  }

  ngOnInit() {
  }

  onSubmit() {

    this.userService.createUser(this.formulario.value)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}