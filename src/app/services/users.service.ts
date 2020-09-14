import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public isAuth: boolean;
  public tokenDecoded: any;

  private token = localStorage.getItem('token');
  private url = environment.url;

  // tslint:disable-next-line: max-line-length
  constructor( private http: HttpClient, afsAuth: AngularFireAuth, private router: Router, private athService: AuthService ) {
    this.tokenDecoded = this.athService.tokenDecoded;
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

  deleteAccount(): Observable<any>{
    const userId = this.tokenDecoded.id;
    console.log(userId);
    try{
      const deletedUser = this.http.delete(`${this.url}/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${this.token}`
        }
      });
      alert('El usuario ha sido eliminado correctamente.');
      this.athService.logout();
      return deletedUser;
    } catch (err) {
      alert('No hemos podido eliminar el usuario. Por favor, inténtelo de nuevo már tarde.');
    }
  }

}
