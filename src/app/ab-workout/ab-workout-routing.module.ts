import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbWorkoutPage } from './ab-workout.page';

const routes: Routes = [
  {
    path: '',
    component: AbWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbWorkoutPageRoutingModule {}
