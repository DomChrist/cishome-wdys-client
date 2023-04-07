import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSelectDialogComponent } from './participant-select-dialog.component';

describe('ParticipantSelectDialogComponent', () => {
  let component: ParticipantSelectDialogComponent;
  let fixture: ComponentFixture<ParticipantSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantSelectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
