import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private dataService: SharedDataService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userID') != null) {
      this.router.navigate(['/tabs/workout']);
    }
  }

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    this.dataService.login(this.email, this.password);
    if (localStorage.getItem('userID') != null) {
      this.router.navigate(['/tabs/workout']);
    } else {
      this.errorMessage = this.dataService.errorMessage;
    }
  }
}
