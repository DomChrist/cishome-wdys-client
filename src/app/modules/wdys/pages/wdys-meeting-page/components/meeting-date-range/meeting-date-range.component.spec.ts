import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDateRangeComponent } from './meeting-date-range.component';

describe('MeetingDateRangeComponent', () => {
  let component: MeetingDateRangeComponent;
  let fixture: ComponentFixture<MeetingDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingDateRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
