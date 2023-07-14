import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BWorkoutPageRoutingModule } from './b-workout-routing.module';

import { BWorkoutPage } from './b-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BWorkoutPageRoutingModule
  ],
  declarations: [BWorkoutPage]
})
export class BWorkoutPageModule {}
