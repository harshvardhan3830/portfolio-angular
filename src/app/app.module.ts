import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
  Instagram,
  Linkedin,
  Github,
  Gitlab,
  Airplay,
  Smartphone,
  Server
} from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({
      File,
      Home,
      Menu,
      UserCheck,
      Instagram,
      Linkedin,
      Github,
      Gitlab,
      Airplay,
      Smartphone,
      Server
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
