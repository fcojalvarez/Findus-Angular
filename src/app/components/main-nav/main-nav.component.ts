import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styles: [
    '.active{ border-bottom: 2px solid #ffd04b }'
  ]
})
export class MainNavComponent {

  public showmenu:boolean = false;

  constructor() {
    this.checkWidth()
  }


  checkWidth(){
    const vp:number = window.innerWidth;
    if(vp > 640) this.showmenu = true;
  }

}
