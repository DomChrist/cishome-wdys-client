import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysDashboardPageComponent } from './wdys-dashboard-page.component';

describe('WdysDashboardPageComponent', () => {
  let component: WdysDashboardPageComponent;
  let fixture: ComponentFixture<WdysDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysDashboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
