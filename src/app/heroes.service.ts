import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Heroe } from './heroe';
import { HEROES } from './set-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes():Observable<Heroe[]>
  {
    return of(HEROES)
  }

  getHeroe(id: number): Observable<Heroe> {
    return of(HEROES.find(heroe => heroe.id === id)!);  }
}

