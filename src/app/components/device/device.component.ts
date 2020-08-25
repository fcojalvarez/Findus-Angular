import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent implements OnInit {

  public deviceID;
  @Input() selectDevice;

  constructor( route: ActivatedRoute ) {
    route.params.subscribe( data => this.deviceID = data.id );
  }

  ngOnInit(): void {
  }

}
