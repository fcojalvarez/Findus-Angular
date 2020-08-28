import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isAuth: boolean;
  public tokenDecoded: any;

  private token: string;
  private url = environment.url;

  constructor( private http: HttpClient, afsAuth: AngularFireAuth ) {
    this.checkAuth();
   }

  login(userData): void{
    this.http.post(`${this.url}/auth/login`, userData).subscribe( (data: any) => {
      window.localStorage.setItem('token', data.token);
      this.token = data.token;
    });
  }

  getUsers(): any{
    return this.http.get(`${this.url}/users`);
  }

  getUser(): Observable<any>{
    if (this.tokenDecoded) {
      try{
        const userID = this.tokenDecoded.id;
        return this.http.get(`${this.url}/users/${userID}`, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        });
      } catch {
        alert('Ha habido un error al obtener el usuario.');
      }
    }
    return;
  }

  editUser(userEdited): Observable<any>{
    try{
      return this.http.put(`${this.url}/users/${this.tokenDecoded.id}`, userEdited, {
        headers: {
            Authorization: `Bearer ${this.token}`
        }
      });
    } catch {
      alert('No se ha podido actualizar el usuario');
    }
  }

  changePassword(user): Observable<any>{
    try{
      const changePassword = this.http.post(`${this.url}/auth/resetPassword`, { email: user.email });
      alert('Se ha enviado la petición, recibirá un correo con las instrucciones.');
      return changePassword;
    } catch (err) {
      alert('No se ha podido enviar la petición para cambiar la contraseña, por favor vuelva a intentarlo más tarde.');
    }
  }

  deleteAccount(user): Observable<any>{
    try{
      const deletedUser = this.http.delete(`${this.url}users/${this.tokenDecoded._id}`, {
        headers: {
            Authorization: `Bearer ${this.token}`
        }
      });
      alert('El usuario ha sido eliminado.');
      // Añadir aquí la función logout
      return deletedUser;
    } catch (err) {
      alert('No hemos podido eliminar el usuario. Por favor, inténtelo de nuevo már tarde.');
    }
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
