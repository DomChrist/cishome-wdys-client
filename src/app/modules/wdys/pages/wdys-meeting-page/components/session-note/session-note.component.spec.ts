import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNoteComponent } from './session-note.component';

describe('SessionNoteComponent', () => {
  let component: SessionNoteComponent;
  let fixture: ComponentFixture<SessionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
