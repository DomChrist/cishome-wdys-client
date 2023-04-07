import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTodoViewComponent } from './meeting-todo-view.component';

describe('MeetingTodoViewComponent', () => {
  let component: MeetingTodoViewComponent;
  let fixture: ComponentFixture<MeetingTodoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingTodoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingTodoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
