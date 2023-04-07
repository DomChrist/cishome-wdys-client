import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingButtonComponent } from './time-tracking-button.component';

describe('TimeTrackingButtonComponent', () => {
  let component: TimeTrackingButtonComponent;
  let fixture: ComponentFixture<TimeTrackingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTrackingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
