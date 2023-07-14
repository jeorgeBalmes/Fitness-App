import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  ngOnInit(): void {}
  constructor(private dataService: SharedDataService, private router: Router) {}
  fullName: string = '';
  phoneNumber: string = '';
  emailAddress: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  // Function to handle form submission
  submitForm() {
    // Access the form data
    console.log('Full Name:', this.fullName);
    console.log('Phone Number:', this.phoneNumber);
    console.log('Email Address:', this.emailAddress);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

    if (this.password == this.confirmPassword) {
      if (
        this.fullName != '' &&
        this.phoneNumber != '' &&
        this.emailAddress != '' &&
        this.password != ''
      ) {
        this.dataService.signup(
          this.fullName,
          this.phoneNumber,
          this.emailAddress,
          this.password
        );
        this.errorMessage = '';
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Incomplete Details';
      }
    } else {
      this.errorMessage = 'Password not match';
    }
    console.log(this.dataService.person);
  }
}
