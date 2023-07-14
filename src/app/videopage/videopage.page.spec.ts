import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideopagePage } from './videopage.page';

describe('VideopagePage', () => {
  let component: VideopagePage;
  let fixture: ComponentFixture<VideopagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VideopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
