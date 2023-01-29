import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { HiddenComponent } from './Components/hidden/hidden.component';
import { DataComponent } from './Components/data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HiddenComponent,
    DataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
