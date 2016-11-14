import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { Hero } from './hero';
// Importing the service allows us to reference it in our code.
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  // styles: [require('./app.component.scss').toString()],
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
	// These properties are public by default
	// heroes is considered an uninitialized property here
	heroes: Hero[];
	// Need to define the type for hero here because Typescript cannot infer it otherwise
	selectedHero: Hero;

	// This is how HeroComponent acquires a runtime concrete HeroService instance (in lieu of using `new` which has many issues)
	// The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
	// Now Angular will know to supply an instance of the HeroService when it creates a new HeroComponent.
	// This is called dependency injection... that's why services are injectables and heroService is an injector (once  we register the HeroService provider in HeroComponent's metadata)
	constructor(
		private heroService: HeroService,
		private router: Router ) {}

	ngOnInit(): void {
		this.getHeroes();
	}


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	// We don't really need a dedicated method to wrap one line. We write it anyway:
	getHeroes(): void {
		// heroes => this.heroes = heroes is the arrow function denoting an unbound `this` version (no that) of function(heroes) { return that.heroes = heroes }
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
