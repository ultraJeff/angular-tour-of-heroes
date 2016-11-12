import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div *ngIf="hero">
	  	<h2>{{hero.name}} details!</h2>
	  	<div>
	  		<label class="ion-arrow-right-a">id: </label>{{hero.id}}
			</div>
			<div>
	  		<label>name: </label>
	  		<input [(ngModel)]="hero.name" placeholder="name">
			</div>
		</div>
	`
})

export class HeroDetailComponent {
	// This is the preferred way of declaring that your component property is an input!
	@Input()
	hero: Hero;
}
