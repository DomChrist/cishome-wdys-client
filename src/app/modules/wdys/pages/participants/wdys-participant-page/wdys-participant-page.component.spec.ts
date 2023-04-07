import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysParticipantPageComponent } from './wdys-participant-page.component';

describe('WdysParticipantPageComponent', () => {
  let component: WdysParticipantPageComponent;
  let fixture: ComponentFixture<WdysParticipantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysParticipantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysParticipantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
