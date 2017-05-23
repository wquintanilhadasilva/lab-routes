import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero } from "app/hero";
import { HeroService } from "app/hero.service";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  exibir: boolean = false;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  carregaHeroes(): void{
    this.heroService.getHeroes().then(h => this.heroes = h);
  }

  ngOnInit() {
    this.carregaHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.exibir = true;
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
