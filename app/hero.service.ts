import { Injectable } from '@angular/core';
import { /*Headers,*/ Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

// We imported the Angular Injectable function and applied that function as an @Injectable() decorator.
// Don't forget the parentheses!
@Injectable()
export class HeroService {
	private heroesUrl = 'app/heroes'; // URL to web api

	constructor(private http: Http) { }

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
						.then(heroes => heroes.find(hero => hero.id === id));
	}
	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
								.toPromise()
								// This particular in-memory web API example happens to return an object with a data property. Your API might return something else. Adjust the code to match your web API.
								.then(response => response.json().data as Hero[])
								.catch(this.handleError);
	}
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve =>
			setTimeout(resolve, 5000)) // delay 2 seconds
			.then(() => this.getHeroes()); // call regular getHeroes method
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
