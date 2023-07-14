import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LWorkoutPageRoutingModule } from './l-workout-routing.module';

import { LWorkoutPage } from './l-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LWorkoutPageRoutingModule
  ],
  declarations: [LWorkoutPage]
})
export class LWorkoutPageModule {}
