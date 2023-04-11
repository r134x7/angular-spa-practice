import { Injectable } from '@angular/core';
import type { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { 

  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
