import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdysSearchInputComponent } from './wdys-search-input.component';

describe('WdysSearchInputComponent', () => {
  let component: WdysSearchInputComponent;
  let fixture: ComponentFixture<WdysSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdysSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WdysSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
