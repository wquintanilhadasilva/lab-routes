import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from "@angular/router";
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService }    from './hero.service';
import { Hero }           from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(h => this.hero =h);
  }

  goBack(): void{
    this.location.back();
  }

}
