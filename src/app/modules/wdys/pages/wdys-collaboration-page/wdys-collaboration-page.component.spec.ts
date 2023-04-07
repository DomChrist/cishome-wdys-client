import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysCollaborationPageComponent } from './wdys-collaboration-page.component';

describe('WdysCollaborationPageComponent', () => {
  let component: WdysCollaborationPageComponent;
  let fixture: ComponentFixture<WdysCollaborationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysCollaborationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysCollaborationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
