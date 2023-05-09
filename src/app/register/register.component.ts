import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    phoneno: '',
    name: '',
    pin: '',
    username: '',
    password: '',
  };
 token!: boolean ;
 isTouched: boolean = true;
 issouched: boolean = true;
istouched: boolean = true;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  fieldValue = [];
  onReg() {
    // Check for any text danger ngIf in the HTML component
    const invalidFields = document.querySelectorAll('.text-danger');
    if (invalidFields.length > 0) {
      alert('Please enter proper credentials.');
      return;
    }
  
    // Proceed with registration if all fields are valid
    this.signupUsers.push(this.signupObj);
    this.signupUsers.push(this.token=true);
      
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    localStorage.setItem('token', JSON.stringify(this.token));
  
    this.signupObj = {
      username: '',
      password: '',
      pin: '',
      phoneno: '',
      name: '',
    };
    alert('Registered');
    this.login();
    localStorage.setItem('token', '');
  }
  
  isValidPhoneNumber(): boolean {
    const phoneNumberRegex = /[0-9]{10}/;
    return phoneNumberRegex.test(this.signupObj.phoneno);
  }
  onInputFocus(event: any) {
    event.target.value = "+91";
  }
  

  login() {
    this.router.navigate(['/login']);
  }
}
