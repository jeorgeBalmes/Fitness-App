import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbWorkoutPageRoutingModule } from './ab-workout-routing.module';

import { AbWorkoutPage } from './ab-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbWorkoutPageRoutingModule
  ],
  declarations: [AbWorkoutPage]
})
export class AbWorkoutPageModule {}
