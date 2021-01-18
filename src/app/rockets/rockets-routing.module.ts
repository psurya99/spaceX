import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocketListComponent } from './rocket-list/rocket-list.component';

import { RocketsComponent } from './rockets.component';

const routes: Routes = [
  { path: '',  component: RocketsComponent },
  {path:':id', component:RocketListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketsRoutingModule { }
