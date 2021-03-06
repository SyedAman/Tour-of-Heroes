import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // input listedHero value from Hero.ts
  @Input() listedHero : Hero;

  constructor(
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  fetchHero(): void {
      this.activatedRoute.params.forEach((params: Params) => { // Use forEach() to go through array of all route parameters and then extract value of hero_id
      this.heroService.getHero(+params['hero_id']).then(promisedHero => this.listedHero = promisedHero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.fetchHero();
  }
}
