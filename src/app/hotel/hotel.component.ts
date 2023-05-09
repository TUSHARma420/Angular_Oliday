import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(private router: Router) {}
ngOnInit(): void {
  
}

toggleHome(){
  this.router.navigate(['home']);
}
}
