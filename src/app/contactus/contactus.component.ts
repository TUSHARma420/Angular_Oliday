import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  constructor(private router: Router) {}
  
  
  
  ngOnInit(): void {
    
  }
  menuExpanded = false;
  
  toggleHome() {
    this.router.navigate(['home']);
  }
  
  
  
  toggleNav() {
    this.menuExpanded = !this.menuExpanded;
  }
  toogleHotels() {
    this.router.navigate(['register']);
  }
  toggleFaq() {
    this.router.navigate(['register']);
  }
  
  
  submitt(){
    alert('Thanks for Contacting Us')
    
  }
  register() {
   
      this.router.navigate(['register']);
    
  }
  goBack(){
    this.router.navigate(['register']);
    alert("Signed Out Successfully");
  }
  goBooknow(){
    this.router.navigate(['booknow']);
    
  }
}
