import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysParticipantDetailSessionsComponent } from './wdys-participant-detail-sessions.component';

describe('WdysParticipantDetailSessionsComponent', () => {
  let component: WdysParticipantDetailSessionsComponent;
  let fixture: ComponentFixture<WdysParticipantDetailSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysParticipantDetailSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysParticipantDetailSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
