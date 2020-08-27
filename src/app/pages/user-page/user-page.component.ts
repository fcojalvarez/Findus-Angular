import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent implements OnInit {

  public userData: any;
  private users: any[];
  public isAuth: boolean;

  constructor( private usersService: UsersService) {
    this.usersService.checkAuth();
  }


  ngOnInit() {
    this.usersService.getUser().subscribe( (user): any => this.userData = user );
  }

  editUserData(){
    console.log('edit user');
  }

  editPassword(){
    console.log('edit password');
  }

  deleteUser(){
    console.log('delete user');
  }

  showFavsDevices(){
    console.log('show devices favs');
  }


  showComments(){
    console.log('show comments');
  }

}
