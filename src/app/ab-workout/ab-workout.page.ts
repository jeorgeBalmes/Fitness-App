import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ab-workout',
  templateUrl: './ab-workout.page.html',
  styleUrls: ['./ab-workout.page.scss'],
})
export class AbWorkoutPage implements OnInit {
//fitness paglalagyan ng data
fitness : any = []

constructor(private dataService : SharedDataService, private router: Router){}

ngOnInit() {
  //run yung functions once nagload page
  //fetch data
    this.fitness = this.dataService.getTutorial('abs workout')
   
}
//select video thevn store to local storage
setVideo(name: string){
  localStorage.removeItem('video')
    localStorage.setItem('video', name)
//goto video page
  this.router.navigate(['/videopage'])
  console.log(name)

}
}
