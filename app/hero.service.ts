import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// We imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses!
@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		// We're simulating the behavior of an ultra-fast, zero-latency server, by returning an immediately resolved Promise with our mock heroes as the result.
		return Promise.resolve(HEROES);
	}
}
