import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
    .then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then((res) => {
      console.log(res);
      this.router.navigate(['/home']);
    }).catch((err) => {
      console.log(err);
    });
  }
}
