import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

// If it starts with an @ - it's called a decorator... they're experimental!
@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule
	],
  declarations: [
  	AppComponent,
  	HeroDetailComponent
	],
  bootstrap:		[ AppComponent ]
})
export class AppModule { }
