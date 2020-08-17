import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-random-devices',
  templateUrl: './random-devices.component.html'
})
export class RandomDevicesComponent implements OnInit {

  public devicesRandom;

  constructor(private _DeviceService: DevicesService) { }

  ngOnInit(): void {
    this._DeviceService.getDevicesRandom().subscribe(data => { this.devicesRandom = data } )

  }

  

}
