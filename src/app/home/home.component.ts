import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = '';
  
  
  
  
  constructor(private router: Router) {}
  
  

  imageUrls = [
    'https://source.unsplash.com/720x600/?hotels,imagination',
    'https://source.unsplash.com/720x600/?mountains,places,beaches',
    'https://source.unsplash.com/720x600/?holiday,nature',
    'https://source.unsplash.com/720x600/?nature,holiday,nature',
    'https://source.unsplash.com/720x600/?monuments,,',
    'https://source.unsplash.com/720x600/?hotels,nature',
    'https://source.unsplash.com/720x600/?beaches,holiday,nature',
    'https://source.unsplash.com/720x600/?people,places,beaches',
    'https://source.unsplash.com/720x600/?packing,nature',
    'https://source.unsplash.com/720x600/?luxory,holiday,nature',
    'https://source.unsplash.com/720x600/?tent,places,beaches',
    'https://source.unsplash.com/720x600/?,nature',
  ];
  currentIndex = 0;
  
  
  ngOnInit() {
    interval(2100).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
      const imageElement = document.getElementById('natureImage') as HTMLImageElement;
      imageElement.src = this.imageUrls[this.currentIndex];
    });
    const signUpUsers = JSON.parse(localStorage.getItem('signUpUsers') || '[]');
    this.userName = signUpUsers.length > 0 ? signUpUsers[0].name : '';
    
  }
  
  menuExpanded = false;

  

 toggleAboutus(){
  this.router.navigate(['aboutus']);
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
  toggleHome() {
    this.router.navigate(['home']);
  }
  
  
  register() {
   
      this.router.navigate(['register']);
    
  }
  goBack(){
    this.router.navigate(['register']);
   
    alert("Signed Out Successfully");
    setTimeout(() => {
      localStorage.setItem('token', '');
    }, 2000); 
    
  }
  goBooknow(){
    this.router.navigate(['booknow']);
    
    
  }
  togglefaq(){
    this.router.navigate(['faq']);
  }
  
  goGallery(){
    this.router.navigate(['gallery']);

  }
  goUser(){
    this.router.navigate(['userprofile']);

  }
  goContactus(){
    this.router.navigate(['contactus']);

  }
  
  

 
}