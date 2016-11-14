import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
// A Subject is also an Observable
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  // A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings, the filter criteria for the name search.
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    // Each call to search puts a new string into this subject's observable stream by calling next.
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    // We're going to turn the stream of search terms into a stream of Hero arrays and assign the result to the heroes property.
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      // switchMap cancels and discards previous search observables, returning only the latest search service observable.
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
