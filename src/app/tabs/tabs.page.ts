import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../shared-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private dataService : SharedDataService, private router: Router){}

  ngOnInit() {
    if(localStorage.getItem('userID') == null){
      this.router.navigate(['/login']);

    }
  }

}
