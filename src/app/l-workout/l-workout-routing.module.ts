import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LWorkoutPage } from './l-workout.page';

const routes: Routes = [
  {
    path: '',
    component: LWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LWorkoutPageRoutingModule {}
