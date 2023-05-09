import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const { localStorage } = window;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
 
})

export class LoginComponent implements OnInit {
  
  isTouched:boolean=true;
  istouched:boolean=true;
  signupUsers:any[]=[];
  signupObj:any={
    username: '',
    password: '',
    pin: '',
  }
  loginObj:any={
    username: '',
    password: '',
    pin:'',
  }
  static loginSuccess: boolean;
 loginmode: boolean=false;
  static loginmode: boolean;
  
 
 onswitch(){
  this.loginmode= !this.loginmode;
 
 }
 

  
  toggleNav() {
    this.menuExpanded = !this.menuExpanded;
  }
 
  error!: string ;
  loginSuccess!: boolean;
  loginMessage!: string;
  menuExpanded = false;
 
  
  constructor(private router: Router) {}
  




  onLog() {
    const isUserExist = this.signupUsers.find(m => m.username === this.loginObj.username && m.password === this.loginObj.password);
    const isPinExist = this.signupUsers.find(m => m.pin === this.loginObj.pin);
  
    if ((isUserExist !== undefined && isPinExist === undefined) || (isUserExist === undefined && isPinExist !== undefined)) {
      setTimeout(() => {
        this.navhome();
      }, 2000); 
      setTimeout(() => {
        localStorage.setItem('token', 'true');
      }, 1000); 
    }  else {
      this.loginMessage = 'Please enter valid Credentials.🙏';
    }
  }
  


  

  
  navhome() {
    
    this.router.navigate(['/home']); 
  
    }
    
  // onClose() {
  //   this.loginSuccess = false;
  //   this.loginMessage = this.loginMessage; 
  // }

  register() {
   
      this.router.navigate(['/register']);
    
  }

  goforgetpassword() {
    this.router.navigate(['/forgetpassword']);
  }
  

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    
    if(localData!=null) {
      this.signupUsers = JSON.parse(localData);
    }

  }

  
}
 
