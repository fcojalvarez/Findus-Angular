import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styles: [
    '.active{ border-bottom: 2px solid #ffd04b }'
  ]
})
export class MainNavComponent {

  public showmenu = false;

  constructor() {
    this.checkWidth();
  }


  checkWidth(): void{
    const widthVieport: number = window.innerWidth;
    if (widthVieport > 640) { this.showmenu = true; }
  }

}
