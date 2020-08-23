import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {
  public isShowLoginForm = true;
  constructor() { }

  ShowRegisterForm(): void {
    this.isShowLoginForm = false;
  }

  ShowLoginForm(): void {
    this.isShowLoginForm = true;
  }
}
