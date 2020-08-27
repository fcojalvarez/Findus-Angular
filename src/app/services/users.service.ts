import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isAuth: boolean;
  public tokenDecoded: any;
  private token: string;
  private url = environment.url;

  constructor( private http: HttpClient ) {
    this.checkAuth();
   }

  getUsers(): any{
    return this.http.get(`${this.url}/users`);
  }

  getUser(): Observable<any>{
    if (this.tokenDecoded) {
      const userID = this.tokenDecoded.id;
      return this.http.get(`${this.url}/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }
    return;
  }

  checkAuth(): boolean {
    const token = window.localStorage.getItem('token');
    if (token){
      this.isAuth = true;
      this.tokenDecoded = jwt_decode(token);
      this.token = token;
      return;
    }
    this.isAuth = false;
    return;
  }
}
