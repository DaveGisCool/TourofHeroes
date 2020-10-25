import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Hero } from '../Classes/hero';
import { HEROES } from '../Classes/mock.heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: Fetched with id: ${id}`);

    return of(HEROES.find(hero => hero.id === id));
  }

}
