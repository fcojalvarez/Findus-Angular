import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router ) {
    this.checkWidth();
  }


  checkWidth(): void{
    const widthVieport: number = window.innerWidth;
    if (widthVieport > 640) { this.showmenu = true; }
  }

  logout(): void{
    window.localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
