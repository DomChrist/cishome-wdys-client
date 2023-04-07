import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTodoComponent } from './session-todo.component';

describe('SessionTodoComponent', () => {
  let component: SessionTodoComponent;
  let fixture: ComponentFixture<SessionTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
