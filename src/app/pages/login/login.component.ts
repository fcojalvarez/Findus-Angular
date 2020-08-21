import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  public isShowLoginForm: boolean = true;
  public isShowRegisterForm: boolean = false

  constructor() { }

  ShowRegisterForm() {
    this.isShowRegisterForm = true;
    this.isShowLoginForm = false;
  };

  ShowLoginForm() {
    this.isShowRegisterForm = false;
    this.isShowLoginForm = true;
  };
}
