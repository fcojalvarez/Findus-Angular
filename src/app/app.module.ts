import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    PagesModule,
    AngularFireModule.initializeApp( environment.firebaseConfig )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
