import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutPageRoutingModule } from './workout-routing.module';
//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';//sad

import { WorkoutPage } from './workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutPageRoutingModule
  ],
  declarations: [WorkoutPage],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],//sad
  
})
export class WorkoutPageModule {}
