import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
      // Similar to the .get() in HeroService except this has a query string and we simply return observable instead of .toPromise()
      .get(`app/heroes/?name=${term}`)
      // .json().data is practically a constant
      .map((r: Response) => r.json().data as Hero[]);
  }
}
