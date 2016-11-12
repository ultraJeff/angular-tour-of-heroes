import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
// Importing the service allows us to reference it in our code.
import { HeroService } from './hero.service';

import '../theme/fonts.css';
import '../theme/global.scss';

@Component({
  selector: 'razorfish-heroes',
  // styles: [require('./app.component.scss').toString()],
  template: `
  	<h1>{{title}}</h1>
  	<h2>My Heroes</h2>
  	<ul class="heroes">
  		<!-- ngFor means “take each hero in the heroes array, store it in the local hero variable, and make it available to the corresponding template instance”. -->
  		<!-- [class.selected] is saying “apply the selected class if the heroes match, remove it if they don’t”. -->
  		<li *ngFor="let hero of heroes"
				[class.selected]="hero === selectedHero"
  			(click)="onSelect(hero)">
  			<!-- each hero goes here i.e. bind the array of heroes in our component to our template, iterate over them, and display them individually -->
  			<!-- use built-in structural directive *ngFor - the asterisk in front of ngFor is critical! It tells Angular that the attached element constitute the master template -->
  			<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<!-- my-hero-detail is the name we set as the selector in the HeroDetailComponent metadata. -->
		<!-- We will soon update the AppComponent template so that it binds its selectedHero property to the hero property of our HeroDetailComponent. -->
		<!-- Notice that the hero property is the target of a property binding — it's in square brackets to the left of the (=).
		Angular insists that we declare a target property to be an input property. If we don't, Angular rejects the binding and throws an error. -->
		<!-- The two components won't coordinate until we bind the selectedHero property of the AppComponent to the HeroDetailComponent element's hero property like this: -->
		<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
	// The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent.
	// The AppComponent can use that service to get heroes and so can every child component of its component tree.
	providers: [HeroService]
})

export class AppComponent implements OnInit {
	// These properties are public by default
	// heroes is considered an uninitialized property here
	heroes: Hero[];
	title = 'Tour of Heroes';
	// Need to define the type for hero here because Typescript cannot infer it otherwise
	selectedHero: Hero;

	// This is how AppComponent acquires a runtime concrete HeroService instance (in lieu of using `new` which has many issues)
	// The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
	// Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	// This is called dependency injection... that's why services are injectables and heroService is an injector (once  we register the HeroService provider in AppComponent's metadata)
	constructor( private heroService: HeroService) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	// We don't really need a dedicated method to wrap one line. We write it anyway:
	getHeroes(): void {
		// heroes => this.heroes = heroes is shorthand and an unbound `this` version (no that) of function(heroes) { return that.heroes = heroes }
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
