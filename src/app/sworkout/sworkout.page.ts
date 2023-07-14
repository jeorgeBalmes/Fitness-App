import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sworkout',
  templateUrl: './sworkout.page.html',
  styleUrls: ['./sworkout.page.scss'],
})
export class SworkoutPage implements OnInit {
//fitness paglalagyan ng data
  fitness : any = []

  constructor(private dataService : SharedDataService, private router: Router){}

  ngOnInit() {
    //run yung functions once nagload page
    //fetch data
      this.fitness = this.dataService.getTutorial('shoulder workout')
     
  }
  //select video then store to local storage
  setVideo(name: string){
    localStorage.removeItem('video')
      localStorage.setItem('video', name)
  //goto video page
    this.router.navigate(['/videopage'])
    console.log(name)
  }



}
