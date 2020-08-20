import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [ '.text-shadow{ text-shadow: 1px 1px 2px #333; }'
  ]
})
export class LoginFormComponent{

  public formRegister: FormGroup;
  public formLogin: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  isShowFormLogin: boolean = false;
  isShowFormRegister: boolean = true;

  constructor( private fb: FormBuilder ) { 
    this.formRegister = this.createFormRegister()
   }

   get name() { return this.formRegister.get('name'); }
   get lastname() { return this.formRegister.get('lastname'); }
   get email() { return this.formRegister.get('email'); }
   get repeatEmail() { return this.formRegister.get('repeatEmail'); }
   get password() { return this.formRegister.get('password'); }
   get repeatPassword() { return this.formRegister.get('repeatPassword'); }

  createFormRegister(){
    return new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      lastname: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      email: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ]),
      repeatEmail: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      repeatPassword: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    })
  }

  onResetForm(){
    this.formLogin.reset();
    this.formRegister.reset();
  }

  showRegisterForm(){
    this.isShowFormLogin = false;
    this.isShowFormRegister = true;
  }
  showLoginForm(){
    this.isShowFormLogin = true;
    this.isShowFormRegister = false;
  }

  register(form){
    console.log(form)
  }

}
