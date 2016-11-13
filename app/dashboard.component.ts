import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	// Don't need moduleId when you use webpack
	// http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
	// moduleId: module.id.toString(),
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		// Get the top 4 heroes
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
