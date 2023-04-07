import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysCreateMeetingPageComponent } from './wdys-create-meeting-page.component';

describe('WdysCreateMeetingPageComponent', () => {
  let component: WdysCreateMeetingPageComponent;
  let fixture: ComponentFixture<WdysCreateMeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysCreateMeetingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysCreateMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
