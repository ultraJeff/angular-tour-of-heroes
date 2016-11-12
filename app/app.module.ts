import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

// If it starts with an @ - it's called a decorator... they're experimental!
@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule
	],
  declarations: [
  	AppComponent,
  	HeroesComponent,
  	HeroDetailComponent
	],
	// The providers array tells Angular to create a fresh instance of the HeroService when it creates a new HeroComponent.
	// The HeroComponent can use that service to get heroes and so can every child component of its component tree.
	providers: [
		HeroService
	],
  bootstrap:		[ AppComponent ]
})

export class AppModule { }
