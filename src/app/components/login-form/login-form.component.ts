import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [ '.text-shadow{ text-shadow: 1px 1px 2px #333; }'
  ]
})

export class LoginFormComponent{

  public formLogin: FormGroup;
  public token: string;

  private url = environment.url;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private fb: FormBuilder, private http: HttpClient, private router: Router ) {
    this.formLogin = this.createForm();
  }


  get email(): AbstractControl { return this.formLogin.get('email'); }
  get password(): AbstractControl { return this.formLogin.get('password'); }

  createForm(): FormGroup{
    return new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    });
  }

  onResetForm(): void {
    this.formLogin.reset();
  }

  login(): void{
    const loginData = {
      email: this.email.value,
      password: this.password.value
    };

    this.http.post(`${this.url}auth/login`, loginData).subscribe( (data: any) => {
      window.localStorage.setItem('token', data.token);
      this.token = data.token;
    });
    this.onResetForm();
    this.router.navigate(['/']);
  }

  restorePassword(): void{
    console.log('aun no está implementado');
  }

}
