import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent {

  public userData: any;
  public favsDevices: any[];
  public commentsUser: any[];
  public isAuth: boolean;
  public isShowFormUserData = false;
  public isShowWarningMessage = false;
  public isShowFavoriteDevices = false;
  public isShowComments = false;
  public formEditUserData: FormGroup;

  private users: any[];


  constructor( private usersService: UsersService, private devicesService: DevicesService , private fb: FormBuilder) {
    this.usersService.checkAuth();
    this.usersService.getUser().subscribe( (user): any => this.userData = user );
  }

  get name(): AbstractControl { return this.formEditUserData.get('name'); }
  get surname(): AbstractControl { return this.formEditUserData.get('surname'); }
  get email(): AbstractControl { return this.formEditUserData.get('email'); }
  get image(): AbstractControl { return this.formEditUserData.get('image'); }

  createForm(user): FormGroup {
    return new FormGroup({
      name:     new FormControl(user.name, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl(user.surname, [Validators.required, Validators.minLength(3)]),
      email:    new FormControl(user.email, [Validators.required, Validators.minLength(8)]),
      image:    new FormControl(user.image, [Validators.required, Validators.minLength(10)])
    });
  }

  showFormEditUser(): void{
    this.formEditUserData = this.createForm(this.userData);
    this.isShowFormUserData = !this.isShowFormUserData;
  }

  sendChangesUserData(userEdited): void{
    try {
        this.usersService.editUser(userEdited).subscribe();
        this.isShowFormUserData = false;
    } catch (err) {
        alert('Ha habido un error al actualizar los datos del usuario.');
    }
  }

  discardChanges(): void{
    this.formEditUserData.reset();
    this.isShowFormUserData = false;
  }

  editPassword(): void{
    this.usersService.changePassword(this.userData).subscribe();
  }

  showWarningMessage(): void{
    this.isShowWarningMessage = !this.isShowWarningMessage;
  }
  cancelDeleteUser(): void{
    this.isShowWarningMessage = false;
  }

  deleteUser(): void{
    this.usersService.deleteAccount().subscribe();
  }

  showFavsDevices(): void{
    this.isShowFavoriteDevices = !this.isShowFavoriteDevices;
    if (this.favsDevices !== undefined){
      this.devicesService.getFavsDevices(this.userData._id).subscribe(data => this.favsDevices = data );
    }
  }

  showComments(): void{
    this.isShowComments = !this.isShowComments;
    this.usersService.getComments().subscribe( (comments: any[]) => {
      this.commentsUser = comments.filter( comment => comment.userCreateID === this.userData._id);
    });
  }

}

