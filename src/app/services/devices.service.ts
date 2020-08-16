import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private url: string = 'https://findusapi.herokuapp.com';

  constructor(private http: HttpClient) { 
  }

  getDevices(){
    return this.http.get(`${this.url}/devices`)
  }

  getDevicesRandom(){
    return this.http.get(`${this.url}/devicesAleatory`)
  }

}
