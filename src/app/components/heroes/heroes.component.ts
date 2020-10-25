import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Classes/hero';
import { HEROES } from '../../Classes/mock.heroes';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().subscribe(
      heroes => (this.heroes = heroes));
  }


}
