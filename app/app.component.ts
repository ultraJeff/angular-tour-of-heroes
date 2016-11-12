import { Component } from '@angular/core';
import { Hero } from './hero';

import '../theme/fonts.css';
import '../theme/global.scss';

// Converting this to a service eventually!
// all caps case for constants!
const HEROES: Hero[] = [
	{ id: 11, name: 'Joey Bag of Donuts' },
	{ id: 12, name: 'The Comedian' },
	{ id: 13, name: 'Dave Navarro' },
	{ id: 14, name: 'Sammy David Sr.' },
	{ id: 15, name: 'Wild Bill' },
	{ id: 16, name: 'Super Someone' },
	{ id: 17, name: 'Dr. Holistic' },
	{ id: 18, name: 'Captain Mutiny' },
	{ id: 19, name: 'Ferretman' },
	{ id: 20, name: 'The Leeping Locust' }
];

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
	`
})

export class AppComponent {
	// Don't confuse heroes and hero here!
	// These properties are public by default
	heroes = HEROES;
	title = 'Tour of Heroes';
	// Need to define the type for hero here because Typescript cannot infer it otherwise
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
