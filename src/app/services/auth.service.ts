import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public tokenDecoded: any;

  public token: string;
  private url = environment.url;

  constructor( private router: Router, private http: HttpClient ) {
    this.checkAuth();
  }


  login(userData): void{
    this.http.post(`${this.url}/auth/login`, userData).subscribe( (data: any) => {
      window.localStorage.setItem('token', data.token);
      this.token = data.token;
    });
  }

  register(newUser): void {
    if (this.token) {
      alert('Ya hay una sesión activa actualmente');
      return;
    }

    // TODO: CHECK IF USER EXIST

    try {
      this.http.post(`${this.url}/users`, newUser).subscribe();
    } catch {
      alert('No hemos podido crear su usuario, por favor inténtelo de nuevo.');
    }
    this.router.navigate(['/login']);
  }

  logout(): void {
    window.localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  checkAuth(): boolean {
    const token = window.localStorage.getItem('token');
    if (token){
      this.tokenDecoded = jwt_decode(token);
      this.token = token;
      return;
    }
    return;
  }
}
