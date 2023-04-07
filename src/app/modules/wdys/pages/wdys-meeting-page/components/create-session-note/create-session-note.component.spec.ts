import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSessionNoteComponent } from './create-session-note.component';

describe('CreateSessionNoteComponent', () => {
  let component: CreateSessionNoteComponent;
  let fixture: ComponentFixture<CreateSessionNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSessionNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSessionNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
