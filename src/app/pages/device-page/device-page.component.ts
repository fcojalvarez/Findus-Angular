import { Component, OnInit, ɵConsole } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styles: [
  ]
})
export class DevicePageComponent implements OnInit {

  public device : {};
  public deviceID: string;

  constructor(route: ActivatedRoute, private _DeviceService: DevicesService) {
    route.params.subscribe( data => this.deviceID = data.id);
  }

  ngOnInit(): void {

    this._DeviceService.getDevices()
        .subscribe( ( data: Array<any> ) =>  {
          this.device = data.filter( device => device._id === this.deviceID )[0];
        })
      
  }

  
}
