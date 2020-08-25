import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isAuth: boolean;
  public userData: object;
  private token: string;
  private tokenDecoded: any;
  private url = environment.url;

  constructor( private http: HttpClient ) {
    this.checkAuth();
   }

  getUsers(): any{
    return this.http.get(`${this.url}/users`).subscribe( users => users );
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

getUser(): any{
  // tslint:disable-next-line: max-line-length
  return this.http.get(`${this.url}/users/${this.tokenDecoded.id}`, { headers: { Authorization: `Bearer ${this.token}` } }).subscribe(user => user);
}

}
