import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSessionButtonComponent } from './delete-session-button.component';

describe('DeleteSessionButtonComponent', () => {
  let component: DeleteSessionButtonComponent;
  let fixture: ComponentFixture<DeleteSessionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSessionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSessionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
