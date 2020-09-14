import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor( private athService: AuthService ) {
    this.checkWidth();
  }


  checkWidth(): void{
    const widthVieport: number = window.innerWidth;
    if (widthVieport > 640) { this.showmenu = true; }
  }

  logout(): void{
    this.athService.logout();
  }

}
