import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    moduleId: module.id,
    templateUrl: '../views/hero-detail.component.html',
    styleUrls: ['../styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
        //print id in console
        this.route.params.subscribe((params: Params) => {
            let id = params['id'];
            console.log(id);
        });
        //ili
        let params: any = this.route.snapshot.params;
        console.log(params.id);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero).then(() => this.goBack());
    }
}