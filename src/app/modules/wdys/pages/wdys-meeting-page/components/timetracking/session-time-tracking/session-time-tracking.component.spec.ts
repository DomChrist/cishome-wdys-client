import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTimeTrackingComponent } from './session-time-tracking.component';

describe('SessionTimeTrackingComponent', () => {
  let component: SessionTimeTrackingComponent;
  let fixture: ComponentFixture<SessionTimeTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionTimeTrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionTimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
