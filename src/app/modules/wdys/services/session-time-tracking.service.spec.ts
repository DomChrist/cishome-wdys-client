import { TestBed } from '@angular/core/testing';

import { SessionTimeTrackingService } from './session-time-tracking.service';

describe('SessionTimeTrackingService', () => {
  let service: SessionTimeTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionTimeTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
