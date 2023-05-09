import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    password: '',
    confirmpassword: ''
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }
  fieldValue=[] ;
 


  resetPassword(username: string, newPassword: string): void {
   
  // Get the existing users from local storage
  const usersString = localStorage.getItem('signUpUsers');
  if (!usersString) {
    alert('Error: No existing users found');
    return;
  }
  const users = JSON.parse(usersString);

  // Find the user by their username
  const user = users.find((u: any) => u.username === username);
  if (!user) {
    alert('Error: User not found');
    return;
  }

  // Update the user's password and save back to local storage
  user.password = newPassword;
  localStorage.setItem('signUpUsers', JSON.stringify(users));

  alert(`Password reset for user ${username}`);
  this.router.navigate(['/login']);
}
  login() {

    this.router.navigate(['/login']);

  }
}

