import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDescriptionPanelComponent } from './session-description-panel.component';

describe('SessionDescriptionPanelComponent', () => {
  let component: SessionDescriptionPanelComponent;
  let fixture: ComponentFixture<SessionDescriptionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionDescriptionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDescriptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
