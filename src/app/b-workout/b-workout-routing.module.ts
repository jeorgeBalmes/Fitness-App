import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BWorkoutPage } from './b-workout.page';

const routes: Routes = [
  {
    path: '',
    component: BWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BWorkoutPageRoutingModule {}
