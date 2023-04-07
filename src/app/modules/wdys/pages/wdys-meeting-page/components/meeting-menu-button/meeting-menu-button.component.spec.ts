import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingMenuButtonComponent } from './meeting-menu-button.component';

describe('MeetingMenuButtonComponent', () => {
  let component: MeetingMenuButtonComponent;
  let fixture: ComponentFixture<MeetingMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
