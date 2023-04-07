import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysMeetingPageComponent } from './wdys-meeting-page.component';

describe('WdysMeetingPageComponent', () => {
  let component: WdysMeetingPageComponent;
  let fixture: ComponentFixture<WdysMeetingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysMeetingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysMeetingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
