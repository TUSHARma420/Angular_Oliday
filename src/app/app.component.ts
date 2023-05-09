import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private router: Router) {}
  
  menuExpanded = false;

  

  

  toggleNav() {
    this.menuExpanded = !this.menuExpanded;
  }
  
  // onSubmit() {
  //   if (this.username === 'admin' && this.password === 'password') {
  //     // Login successful
  //     this.router.navigate(['/hotels']);
  //   } else {
  //     // Login failed
  //     this.error = 'Invalid username or password';
  //   }
  // }

  
  register() {
   
      this.router.navigate(['register']);
    
  }
  

  ngOnInit(): void {}

  
}




