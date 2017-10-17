import { Component , OnInit } from '@angular/core';
import { Hero } from '../../components/hero-detail/hero';
import { HeroService } from '../../providers/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  title: 'Tower of Heroes';
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
     this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
