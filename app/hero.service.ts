import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// We imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses!
@Injectable()
export class HeroService {
	getHeroes(): Hero[] {
		return HEROES;
	}
}
