import { Component } from '@angular/core';

import '../theme/fonts.css';
import '../theme/global.scss';

// IT'S IMPORTANT THAT THIS CLASS IS ABOVE THE @COMPONENT METADATA!
// CONSOLE ERROR OTHERWISE!
export class Hero {
	id: number;
	name: string;
}

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
		<div *ngIf="selectedHero">
	  	<h2>{{selectedHero.name}} details!</h2>
	  	<div>
	  		<label class="ion-arrow-right-a">id: </label>{{selectedHero.id}}
			</div>
			<div>
	  		<label>name: </label>
	  		<input [(ngModel)]="selectedHero.name" placeholder="name">
			</div>
		</div>
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
