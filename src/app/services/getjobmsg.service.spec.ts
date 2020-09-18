import { TestBed } from '@angular/core/testing';

import { GetjobmsgService } from './getjobmsg.service';

describe('GetjobmsgService', () => {
  let service: GetjobmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetjobmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
