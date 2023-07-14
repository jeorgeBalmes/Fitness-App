import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BWorkoutPage } from './b-workout.page';

describe('BWorkoutPage', () => {
  let component: BWorkoutPage;
  let fixture: ComponentFixture<BWorkoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
