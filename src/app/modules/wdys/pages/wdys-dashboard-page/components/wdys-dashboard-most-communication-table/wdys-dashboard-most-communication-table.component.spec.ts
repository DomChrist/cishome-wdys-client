import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysDashboardMostCommunicationTableComponent } from './wdys-dashboard-most-communication-table.component';

describe('WdysDashboardMostCommunicationTableComponent', () => {
  let component: WdysDashboardMostCommunicationTableComponent;
  let fixture: ComponentFixture<WdysDashboardMostCommunicationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysDashboardMostCommunicationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysDashboardMostCommunicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
