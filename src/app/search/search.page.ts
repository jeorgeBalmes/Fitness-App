import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {
  workouts: any[] = [
    { name: 'Dumbell Rows', image: 'bw.jpg' },
    { name: 'Pull Ups', image: 'bw1.jpg' },
    { name: 'Chest Supported DumbBell Row', image: 'bw2.jpg' },
    { name: 'Seated Cable High Row', image: 'bw3.jpg' },
    { name: 'Cable Pull Downs', image: 'bw4.jpg' },
    { name: 'Shoulder Press', image: 'fr.jpg' },
    { name: 'Lateral Raises', image: 'bw1.jpg' },
    { name: 'Front Raises', image: 'bw2.jpg' },
    { name: 'Ez Bar Front Press', image: 'bw3.jpg' },
    { name: 'Dumbell Bent Over Rear Delt Flyes', image: 'bw4.jpg' },
  ];

  displayedWorkouts: any[] = [];
  searchTerm: string = '';

  constructor() {}

  searchWorkouts(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.displayedWorkouts = this.workouts.filter((workout) =>
      workout.name.toLowerCase().includes(searchTerm)
    );
  }
}
