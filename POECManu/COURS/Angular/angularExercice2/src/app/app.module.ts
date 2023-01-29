import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HorlogeComponent } from './components/horloge/horloge.component';
import { ClockMenuComponent } from './components/clock-menu/clock-menu.component';

@NgModule({
  declarations: [AppComponent, HorlogeComponent, ClockMenuComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
