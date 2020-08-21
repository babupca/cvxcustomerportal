import { TestBed } from '@angular/core/testing';

import { KeyleadersService } from './keyleaders.service';

describe('KeyleadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyleadersService = TestBed.get(KeyleadersService);
    expect(service).toBeTruthy();
  });
});
