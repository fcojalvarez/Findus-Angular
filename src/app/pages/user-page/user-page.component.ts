import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent {

  public userData: {};
  public isAuth: boolean;

  constructor( private usersService: UsersService) {
    this.usersService.checkAuth();
    this.usersService.getUser();
    this.userData = this.usersService.userData;
    console.log(this.userData);
  }


}
