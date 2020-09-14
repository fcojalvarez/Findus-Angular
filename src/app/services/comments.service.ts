import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url = environment.url;

  constructor( private http: HttpClient ) { }

  getComments(): Observable<any>{
    return this.http.get(`${this.url}/comments`);
  }
}
