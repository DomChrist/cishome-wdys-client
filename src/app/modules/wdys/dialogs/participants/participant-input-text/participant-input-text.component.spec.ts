import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantInputTextComponent } from './participant-input-text.component';

describe('ParticipantInputTextComponent', () => {
  let component: ParticipantInputTextComponent;
  let fixture: ComponentFixture<ParticipantInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipantInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
