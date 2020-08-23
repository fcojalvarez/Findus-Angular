import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private url = 'https://findusapi.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getDevices(): Observable<any>{
    return this.http.get(`${this.url}/devices`);
  }

  getDevicesRandom(): Observable<any> {
    return this.http.get(`${this.url}/devicesAleatory`);
  }

}
