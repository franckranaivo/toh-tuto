import { Injectable } from '@angular/core';

import { Hero } from '../components/hero-detail/hero'
import { HEROES } from '../components/hero-detail/mock-heroes'

@Injectable() export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
