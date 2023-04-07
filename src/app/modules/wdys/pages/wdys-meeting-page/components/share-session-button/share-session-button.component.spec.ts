import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSessionButtonComponent } from './share-session-button.component';

describe('ShareSessionButtonComponent', () => {
  let component: ShareSessionButtonComponent;
  let fixture: ComponentFixture<ShareSessionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareSessionButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareSessionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
