import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketsRoutingModule } from './rockets-routing.module';
import { RocketsComponent } from './rockets.component';
import { RocketListComponent } from './rocket-list/rocket-list.component';


@NgModule({
  declarations: [RocketsComponent, RocketListComponent],
  imports: [
    CommonModule,
    RocketsRoutingModule
  ]
})
export class RocketsModule { }
