import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  
ngOnInit(): void {
  const signUpUsers = JSON.parse(localStorage.getItem('signUpUsers') || '[]');
  this.userName = signUpUsers.length > 0 ? signUpUsers[0].name : '';
  this.userEmail = signUpUsers.length > 0 ? signUpUsers[0].username : '';
  this.userPhone = signUpUsers.length > 0 ? signUpUsers[0].phoneno : '';
  
 
}




constructor(private router: Router) {}



toggleHome() {
  this.router.navigate(['home']);
}
}
