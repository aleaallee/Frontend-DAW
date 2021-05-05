import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
