import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private url = environment.url;

  constructor(private http: HttpClient) {
  }

  getDevices(): Observable<any>{
    return this.http.get(`${this.url}/devices`);
  }

  getDevicesRandom(): Observable<any> {
    return this.http.get(`${this.url}/devicesAleatory`);
  }

  getFavsDevices(userID): Observable<any>{
    const token = localStorage.getItem('token');
    return this.http.get(`${this.url}/users/${userID}/getDevicesFavorites`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

}
