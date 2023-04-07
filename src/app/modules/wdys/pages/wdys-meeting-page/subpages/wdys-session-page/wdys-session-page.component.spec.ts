import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysSessionPageComponent } from './wdys-session-page.component';

describe('WdysSessionPageComponent', () => {
  let component: WdysSessionPageComponent;
  let fixture: ComponentFixture<WdysSessionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysSessionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysSessionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
