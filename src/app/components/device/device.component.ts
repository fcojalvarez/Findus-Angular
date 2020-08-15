import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html'
})
export class DeviceComponent implements OnInit {

  @Input() selectDevice;    // TODO: crear model device

  constructor() { }

  ngOnInit(): void {
  }

}
