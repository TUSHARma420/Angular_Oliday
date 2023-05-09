import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const token = localStorage.getItem('token');
    if (token) {
      return true;
      // check if the token is valid
      // return true if the token is valid
      // return false if the token is not valid
    } else {
      // redirect the user to the login page if there is no token
      // when editing code comment this
      alert("Please SignIn to Continue.")
      this.router.navigate(['/login']);
      return false;   
      // return true; //when presenting comment this
    }
  }
}
