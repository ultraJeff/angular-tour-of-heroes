import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Joey Bag of Donuts' },
      { id: 12, name: 'The Comedian' },
      { id: 13, name: 'Dave Navarro' },
      { id: 14, name: 'Sammy David Sr.' },
      { id: 15, name: 'Wild Bill' },
      { id: 16, name: 'Super Someone' },
      { id: 17, name: 'Dr. Holistic' },
      { id: 18, name: 'Captain Mutiny' },
      { id: 19, name: 'Ferretman' },
      { id: 20, name: 'The Leeping Locust' }
    ];
    return {heroes};
  }
}
