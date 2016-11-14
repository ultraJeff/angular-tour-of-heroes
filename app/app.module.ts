import { NgModule }      				from '@angular/core';
import { BrowserModule } 				from '@angular/platform-browser';
import { FormsModule } 					from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api (fake BE)
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } 				from './app.component';
import { DashboardComponent } 	from './dashboard.component';
import { HeroesComponent } 			from './heroes.component';
import { HeroDetailComponent } 	from './hero-detail.component';
import { HeroService } 					from './hero.service';

// If it starts with an @ - it's called a decorator... they're experimental!
@NgModule({
  imports:      [
  	BrowserModule,
  	FormsModule,
    HttpModule,
    // The InMemoryWebApiModule replaces the default
    // Http client backend — the supporting service that talks to the remote server — with an in-memory web API alternative service.
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
	],
  declarations: [
  	AppComponent,
  	DashboardComponent,
  	HeroesComponent,
  	HeroDetailComponent
	],
	// The providers array tells Angular to create a fresh instance of the HeroService when it creates a new HeroComponent.
	// The HeroComponent can use that service to get heroes and so can every child component of its component tree.
  // This would be where you added any guard services to prevent unauthorized routing
	providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
