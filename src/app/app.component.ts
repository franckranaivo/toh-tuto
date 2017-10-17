import { Component , OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { Hero } from './components/hero-detail/hero';
import { HeroService } from './providers/hero.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  title: 'Tower of Heroes';
  selectedHero: Hero;
  constructor(public electronService: ElectronService , private heroService: HeroService) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
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
