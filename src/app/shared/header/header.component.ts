import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public userData: Observable<object>;
  public token: string;

  constructor( private usersService: UsersService, private athService: AuthService ) {
    this.athService.checkAuth();
    this.token = this.athService.token;
    if (this.token){ this.usersService.getUser().subscribe( (user: any) => this.userData = user); }
  }

}
