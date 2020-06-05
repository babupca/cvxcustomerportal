import { TestBed } from '@angular/core/testing';

import { BannercustomerService } from './bannercustomer.service';

describe('BannercustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BannercustomerService = TestBed.get(BannercustomerService);
    expect(service).toBeTruthy();
  });
});
