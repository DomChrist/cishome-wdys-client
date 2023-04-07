import { TestBed } from '@angular/core/testing';

import { WdysRoutingService } from './wdys-routing.service';

describe('WdysRoutingService', () => {
  let service: WdysRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WdysRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
