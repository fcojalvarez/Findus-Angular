import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MainNavComponent } from './main-nav/main-nav.component';
import { RandomDevicesComponent } from './random-devices/random-devices.component';
import { DeviceComponent } from './device/device.component';
import { MainFormComponent } from './main-form/main-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoaderComponent } from './loader/loader.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    MainNavComponent,
    RandomDevicesComponent,
    DeviceComponent,
    MainFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LoaderComponent
  ],
  exports: [
    MainNavComponent,
    RandomDevicesComponent,
    DeviceComponent,
    MainFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
