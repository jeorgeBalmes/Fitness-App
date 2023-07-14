import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.page.html',
  styleUrls: ['./videopage.page.scss'],
})
export class VideopagePage implements OnInit {
  isChecked: boolean = false;
  video: any | HTMLVideoElement;

  constructor(private dataService: SharedDataService){}

  fitness : any = {}

  //run the code inside when the ppage is opening
  ngOnInit() {
    let name = localStorage.getItem('video')
    for(let i = 0 ; i < this.dataService.fitness.length; i++){
      if(name == this.dataService.fitness[i].name){
        this.fitness = this.dataService.fitness[i];
      }
      console.log(this.dataService.fitness[i].name)
    }
    //for video checkbox
    this.video = document.getElementById('myVideo') as HTMLVideoElement;
    if (this.video) {
      this.video.addEventListener('ended', () => {
        console.log('video ended');
    this.isChecked = true;

      });
    }
}
}
