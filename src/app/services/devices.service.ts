import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private url = environment.url;
  private token = localStorage.getItem('token');

  constructor(private http: HttpClient, private usersService: UsersService ) {
  }

  getDevices(): Observable<any>{
    return this.http.get(`${this.url}/devices`);
  }

  getDevicesRandom(): Observable<any> {
    return this.http.get(`${this.url}/devicesAleatory`);
  }

  getFavsDevices(userID): Observable<any>{
    return this.http.get(`${this.url}/users/${userID}/getDevicesFavorites`, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
  }

  addDeviceFav(deviceID): Observable<any>{
      const userID = this.usersService.tokenDecoded.id;
      return this.http.post(`${this.url}/users/${userID}/addDevicesFavorites`, { deviceID : deviceID } , {
        headers: { Authorization: `Bearer ${this.token}` }
      });
  }

 /*
  async delDeviceFavorite(){
    try {
      const token = window.localStorage.getItem('token')
      const resultToken = token != null
      let userID
      if (token !== null) {
          const tokenDecoded = jwt_decode(token)
          userID = tokenDecoded.id
      }
      let delFavorite = await this.$axios.post(`users/${userID}/delDevicesFavorites`,
              { deviceID : this.selectDevice._id },
               { headers: { Authorization: `Bearer ${token}`} })
      this.$store.dispatch('getDevicesFavorites')
    } catch (err) {
    }
  } */

}
