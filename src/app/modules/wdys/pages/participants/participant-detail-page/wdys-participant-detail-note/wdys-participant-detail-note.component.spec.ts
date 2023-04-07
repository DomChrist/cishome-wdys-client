import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysParticipantDetailNoteComponent } from './wdys-participant-detail-note.component';

describe('WdysParticipantDetailNoteComponent', () => {
  let component: WdysParticipantDetailNoteComponent;
  let fixture: ComponentFixture<WdysParticipantDetailNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysParticipantDetailNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysParticipantDetailNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
