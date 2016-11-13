import { NgModule }      				from '@angular/core';
import { BrowserModule } 				from '@angular/platform-browser';
import { FormsModule } 					from '@angular/forms';
import { RouterModule } 				from '@angular/router';

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
  	// The Angular router is an external, optional Angular NgModule called RouterModule.
  	// The router is a combination of multiple provided services (RouterModule),
  	// multiple directives (RouterOutlet, RouterLink, RouterLinkActive), and a configuration (Routes)
  	// ========================================================================================================
  	// We use the forRoot method because we're providing a configured router at the root of the application.
  	// The forRoot method gives us the Router service providers and directives needed for routing, and performs
  	// the initial navigation based on the current browser URL.
  	RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
  		{
  			path: 'heroes',
  			component: HeroesComponent
  		},
  		{
  			path: 'dashboard',
  			component: DashboardComponent
  		},
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
  	])
	],
  declarations: [
  	AppComponent,
  	DashboardComponent,
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
