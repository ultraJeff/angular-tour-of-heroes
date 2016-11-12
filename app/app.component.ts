import { Component } from '@angular/core';

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
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2>{{hero.name}} details!</h2>
  	<div>
  		<label>id: </label>{{hero.id}}
		</div>
		<div>
  		<label>name: </label>
  		<input [(ngModel)]="hero.name" placeholder="name">
		</div>
	`
})

export class AppComponent {
	// Don't confuse heroes and hero here!
	// These properties are public by default
	heroes = HEROES;
	title = 'Tour of Heroes';
	// Need to define the type for hero here because Typescript cannot infer it otherwise
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}
