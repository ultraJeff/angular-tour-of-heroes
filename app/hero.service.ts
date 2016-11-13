import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// We imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses!
@Injectable()
export class HeroService {
	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
						.then(heroes => heroes.find(hero => hero.id === id));
	}
	getHeroes(): Promise<Hero[]> {
		// We're simulating the behavior of an ultra-fast, zero-latency server, by returning an immediately resolved Promise with our mock heroes as the result.
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>
			setTimeout(resolve, 2000)) // delay 2 seconds
			.then(() => this.getHeroes()); // call regular getHeroes method
	}
}
