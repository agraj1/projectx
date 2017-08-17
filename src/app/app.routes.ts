import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { HomeComponent } from './home/home.component';
/*import { NavbarComponent } from './navbar/navbar.component';*/
import { LoginregComponent } from './loginreg/loginreg.component';
import { KannadahomeComponent } from './kannadahome/kannadahome.component';
import { KannadacourseComponent } from './kannadacourse/kannadacourse.component';

export const router: Routes = [
		{ path: '', redirectTo: 'home', pathMatch: 'full'},
		{ path: 'languages', component: LanguagesComponent },
		{ path: 'loginreg', component: LoginregComponent },
		{ path: 'kannadacourse', component: KannadacourseComponent },
		{ path: 'kannadahome', component: KannadahomeComponent },
		{ path: 'home', component: HomeComponent }		
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);