import { TestBed } from '@angular/core/testing';

import { CustomerSessionsService } from './customer-sessions.service';

describe('CustomerSessionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerSessionsService = TestBed.get(CustomerSessionsService);
    expect(service).toBeTruthy();
  });
});
