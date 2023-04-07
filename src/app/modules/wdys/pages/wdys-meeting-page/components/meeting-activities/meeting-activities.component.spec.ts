import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingActivitiesComponent } from './meeting-activities.component';

describe('MeetingActivitiesComponent', () => {
  let component: MeetingActivitiesComponent;
  let fixture: ComponentFixture<MeetingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
