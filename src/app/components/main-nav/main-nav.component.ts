import { Component, Input } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styles: [
    '.active{ border-bottom: 2px solid #ffd04b }'
  ]
})
export class MainNavComponent {

  @Input() isAuth: boolean;
  public showmenu = false;

  constructor( private usersService: UsersService ) {
    this.checkWidth();
  }


  checkWidth(): void{
    const widthVieport: number = window.innerWidth;
    if (widthVieport > 640) { this.showmenu = true; }
  }

  logout(): void{
    this.usersService.logout();
  }

}
