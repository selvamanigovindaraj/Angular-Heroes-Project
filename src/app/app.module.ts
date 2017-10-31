import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import{ HeroDetialComponent} from './hero-detail.component';
import { HeroComponent } from './hero.component';
import {DashboardComponent} from './dashboard.component';

import {HeroService} from './hero.service';


const appRoutes: Routes = [
  {
    path : 'heroes',
    component : HeroComponent
  },
  {
    path :'dashboard',
    component : DashboardComponent
  },
  {
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetialComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
