import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { WelcomeHomeComponent } from './components/welcome-home/welcome-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHomeComponent,
    WelcomeHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
