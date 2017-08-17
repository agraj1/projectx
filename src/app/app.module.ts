import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.routes';
import { LoginregComponent } from './loginreg/loginreg.component';
import { KannadahomeComponent } from './kannadahome/kannadahome.component';
import { KannadacourseComponent } from './kannadacourse/kannadacourse.component';


@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    HomeComponent,
    NavbarComponent,
    LoginregComponent,
    KannadahomeComponent,
    KannadacourseComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
