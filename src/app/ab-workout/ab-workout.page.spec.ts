import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbWorkoutPage } from './ab-workout.page';

describe('AbWorkoutPage', () => {
  let component: AbWorkoutPage;
  let fixture: ComponentFixture<AbWorkoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AbWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
