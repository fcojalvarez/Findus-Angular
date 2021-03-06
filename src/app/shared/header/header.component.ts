import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public userData: any;
  public isAuth: boolean;

  constructor( private usersService: UsersService ) {
    this.usersService.checkAuth();
    this.isAuth = this.usersService.isAuth;
    this.userData = this.usersService.userData;
  }

}
