import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  onClick(){
    this.userService.logout()
    .then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }).catch((err) => {
      console.log(err);
    });
  }
}
