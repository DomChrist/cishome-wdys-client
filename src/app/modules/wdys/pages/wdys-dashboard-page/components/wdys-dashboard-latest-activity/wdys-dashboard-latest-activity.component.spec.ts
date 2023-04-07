import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysDashboardLatestActivityComponent } from './wdys-dashboard-latest-activity.component';

describe('WdysDashboardLatestActivityComponent', () => {
  let component: WdysDashboardLatestActivityComponent;
  let fixture: ComponentFixture<WdysDashboardLatestActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysDashboardLatestActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysDashboardLatestActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
