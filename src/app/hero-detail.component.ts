import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detial.component.html',
    styleUrls:['./hero-detail.component.css']
})

export class HeroDetialComponent implements OnInit {
 hero: object;

  constructor(
    private _heroService : HeroService,
    private _route : ActivatedRoute,
    private _location : Location
  ){}

  ngOnInit(){
    this._route.paramMap
    .switchMap((params:ParamMap)=>this._heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this._location.back();
  }
  save(): void {
    this._heroService.update(this.hero)
      .then(() => this.goBack());
  }
}