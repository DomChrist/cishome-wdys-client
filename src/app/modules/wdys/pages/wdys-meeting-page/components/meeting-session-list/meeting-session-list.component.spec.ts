import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSessionListComponent } from './meeting-session-list.component';

describe('MeetingSessionListComponent', () => {
  let component: MeetingSessionListComponent;
  let fixture: ComponentFixture<MeetingSessionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingSessionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
