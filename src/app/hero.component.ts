import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroDetialComponent} from './hero-detail.component';
import { HeroService} from './hero.service';
import { DashboardComponent } from './dashboard.component'


@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
  
})
export class HeroComponent implements OnInit{
  heroes: Hero[];
  selectedHero: Hero;
 
  constructor(private heroService: HeroService) { }
 
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
