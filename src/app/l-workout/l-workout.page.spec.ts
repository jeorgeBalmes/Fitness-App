import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LWorkoutPage } from './l-workout.page';

describe('LWorkoutPage', () => {
  let component: LWorkoutPage;
  let fixture: ComponentFixture<LWorkoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
