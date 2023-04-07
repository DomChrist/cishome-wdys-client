import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycloakResponseComponent } from './keycloak-response.component';

describe('KeycloakResponseComponent', () => {
  let component: KeycloakResponseComponent;
  let fixture: ComponentFixture<KeycloakResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeycloakResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeycloakResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
