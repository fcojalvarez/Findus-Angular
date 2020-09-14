import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, AsyncValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styles: [ '.text-shadow{ text-shadow: 1px 1px 2px #333; }'
  ]
})
export class RegisterFormComponent {

  public formRegister: FormGroup;
  private url = environment.url;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private fb: FormBuilder, private http: HttpClient, private athService: AuthService ) {
    this.formRegister = this.createForm();
  }

  get name(): AbstractControl { return this.formRegister.get('name'); }
  get lastname(): AbstractControl { return this.formRegister.get('lastname'); }
  get email(): AbstractControl { return this.formRegister.get('email'); }
  get repeatEmail(): AbstractControl { return this.formRegister.get('repeatEmail'); }
  get password(): AbstractControl { return this.formRegister.get('password'); }
  get repeatPassword(): AbstractControl { return this.formRegister.get('repeatPassword'); }
  get acceptPolicies(): AbstractControl { return this.formRegister.get('acceptPolicies'); }

  createForm(): FormGroup{
    return new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      lastname: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      // tslint:disable-next-line: max-line-length
      email: new FormControl('', [ Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern) ] ),
      repeatEmail: new FormControl('', [ Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      repeatPassword: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      acceptPolicies: new FormControl('', Validators.required ),
    });
  }


  onResetForm(): void{
    this.formRegister.reset();
  }

  register(){
    const newUser = {
      name: this.name.value,
      surname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      profile: 'user',
      image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown2-512.png'
    };

    try {
      this.athService.register(newUser)
      this.onResetForm();
      alert('Usuario creado correctamente');
    } catch {
      alert('No hemos podido crear su usuario, por favor inténtelo de nuevo.');
    }
  }


}
