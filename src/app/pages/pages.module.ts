import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DevicePageComponent } from './device-page/device-page.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterComponent } from './register/register.component';
import { CommentsComponent } from '../components/comments/comments.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    NotFoundComponent,
    DevicePageComponent,
    AboutComponent,
    LegalComponent,
    UserPageComponent,
    RegisterComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
