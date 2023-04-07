import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysDashboardTodosComponent } from './wdys-dashboard-todos.component';

describe('WdysDashboardTodosComponent', () => {
  let component: WdysDashboardTodosComponent;
  let fixture: ComponentFixture<WdysDashboardTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysDashboardTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysDashboardTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
