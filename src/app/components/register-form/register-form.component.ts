import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styles: [ '.text-shadow{ text-shadow: 1px 1px 2px #333; }'
  ]
})
export class RegisterFormComponent {

  public formRegister: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private fb: FormBuilder,private validators: ValidatorsService ) { 
    this.formRegister = this.createForm()
  }

  get name() { return this.formRegister.get('name'); }
  get lastname() { return this.formRegister.get('lastname'); }
  get email() { return this.formRegister.get('email'); }
  get repeatEmail() { return this.formRegister.get('repeatEmail'); }
  get password() { return this.formRegister.get('password'); }
  get repeatPassword() { return this.formRegister.get('repeatPassword'); }
  get acceptPolicies() { return this.formRegister.get('acceptPolicies'); }

  createForm(){
    return new FormGroup({
      name: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      lastname: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      email: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ], this.validators.userExist),
      repeatEmail: new FormControl('', [ Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      repeatPassword: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
      acceptPolicies: new FormControl('', Validators.required ),
    })
  }


  onResetForm(){
    this.formRegister.reset();
  }

  register(){
    const token = window.localStorage.getItem('token')
            if(token) {
                alert('Ya hay una sesión activa actualmente');
                return;
            }
            const newUser = {
                name: this.name.value,
                lastname: this.lastname.value,
                email: this.email.value,
                password: this.password.value,
                profile: 'user',
                image: 'https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown2-512.png'
            }

            console.log(newUser)
             
           /*  const userEmailListDB = await this.$axios.get('users') */ // TODO: validación asincrona
        
            /* try {
               const userCreated = await this.$axios.$post('users', newUser)
                this.onResetForm();
                
                alert('Usuario creado correctamente');
            } catch {
               alert('No hemos podido crear su usuario, por favor inténtelo de nuevo.')
            }; */
  }

}
