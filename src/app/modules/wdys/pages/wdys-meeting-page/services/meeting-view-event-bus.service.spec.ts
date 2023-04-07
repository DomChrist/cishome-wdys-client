import { TestBed } from '@angular/core/testing';

import { MeetingViewEventBusService } from './meeting-view-event-bus.service';

describe('MeetingViewEventBusService', () => {
  let service: MeetingViewEventBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingViewEventBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
