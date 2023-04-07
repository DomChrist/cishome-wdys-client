import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionParticipantTableComponent } from './session-participant-table.component';

describe('SessionParticipantTableComponent', () => {
  let component: SessionParticipantTableComponent;
  let fixture: ComponentFixture<SessionParticipantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionParticipantTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionParticipantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
