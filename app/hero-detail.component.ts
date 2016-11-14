// Keep the Input import for now, we'll remove it later:
// We will no longer receive the hero in a parent component property binding.
// The new HeroDetailComponent should take the id parameter from the params observable in the ActivatedRoute service
// and use the HeroService to fetch the hero with that id.
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
	// This is the preferred way of declaring that your component property is an input!
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	save(): void {
		this.heroService.update(this.hero)
				.then(() => this.goBack());
	}

	// To prevent going completely out of app consider CanDeactivate guard
	goBack(): void {
		this.location.back();
	}

	ngOnInit(): void {
		console.log(this.route.params);
		this.route.params.forEach((params: Params) => {
			// The hero id is a number. Route parameters are always strings.
			// So we convert the route parameter value to a number with the JavaScript (+) operator.
			let id = +params['id'];
			this.heroService.getHero(id)
				.then(hero => this.hero = hero);
		});
	}
}
