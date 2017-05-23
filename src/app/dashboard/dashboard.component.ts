import { Component, OnInit } from '@angular/core';

import { HeroService } from 'app/hero.service';
import { Hero } from 'app/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5)); //pega os 5 primeiros
  }

}
