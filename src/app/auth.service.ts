import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login (username: string, password: string): boolean{
    if(username === 'master' && password === '$_admin123'){
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated','true');
      return true;
    }
    return false;
  }

  isLoggedIn():boolean{
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  logout(){
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated'); 
    this.router.navigate(['/login']);
  }
}
