import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  private url: string = 'https://findusapi.herokuapp.com/';

  constructor( private http: HttpClient ) { }

  userExist(  control: FormControl ): Promise <any> | Observable<any> {

    if( !control.value ) {
      return Promise.resolve(null);
    }

    /* return new Promise( resolve => {
        this.http.get(`${this.url}/users`).subscribe( data => {
          const userExist = data.filter( user => user.email === control.value)

          if(userExist) {
            resolve({existe: true})
          } else {
            resolve(null)
          }
        });

    }) */

  }

}
