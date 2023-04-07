import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysMeetingViewComponent } from './wdys-meeting-view.component';

describe('WdysMeetingViewComponent', () => {
  let component: WdysMeetingViewComponent;
  let fixture: ComponentFixture<WdysMeetingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysMeetingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysMeetingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
