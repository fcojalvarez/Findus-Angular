import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../../services/devices.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent {

  @Input() selectDevice;

  private token = localStorage.getItem('token');
  public deviceID;
  public showBtnRegister = false;

  constructor( route: ActivatedRoute, private devicesService: DevicesService, private usersService: UsersService ) {
    route.params.subscribe( data => this.deviceID = data.id );
  }


  addDeviceFav() {
    if ( !this.token ) {
      this.showBtnRegister = true;
      return;
    }
    this.devicesService.addDeviceFav(this.deviceID).subscribe( data => {
      
    });
  }
}


/*
      if(addFavorite.data === 'duplicate') {
        this.$message({ message: 'Ya ha añadido este dispositivo como favorito.', type: 'warning', duration: 2500 });
        return
      }
      this.$store.dispatch('getDevicesFavorites')
    } catch (err) {
      console.log(err)
    }
  }
      
      */
